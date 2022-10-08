import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, { useState, useEffect, useRef, useCallback, memo } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import DatePickerView from '../date-picker-view'
import type { DatePickerViewProps } from '../date-picker-view/interface'
import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'
import Locale from '../locale'
import {
  varCreator as varCreatorPicker,
  styleCreator as styleCreatorPicker,
} from '../picker/style'
import Popup from '../popup'
import Theme from '../theme'

import type { DatePickerSingleMethodProps, DatePickerAction } from './interface'

const DATE_PICKER_VIEW_PROPS_KEYS = [
  'defaultValue',
  'mode',
  'min',
  'max',
  'renderLabel',
]

const DatePickerSingleMethod: React.FC<DatePickerSingleMethodProps> = ({
  title,
  confirmButtonText,
  cancelButtonText,
  onCancel,
  onConfirm,
  onPressOverlay,
  beforeClose,

  ...restProps
}) => {
  const locale = Locale.useLocale().DatePickerSingleMethod
  const TOKENS = Theme.useThemeTokens()
  const CV_PICKER = Theme.createVar(TOKENS, varCreatorPicker)
  const STYLES_PICKER = Theme.createStyle(CV_PICKER, styleCreatorPicker)
  const insets = useSafeAreaInsets()

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const Value = useRef<Date>(restProps.defaultValue || new Date())

  useEffect(() => {
    setVisible(true)
  }, [])

  const onChange = useCallback((v: Date) => {
    Value.current = v
  }, [])

  const doAction = usePersistFn((action: DatePickerAction) => {
    setLoading(true)

    callInterceptor(beforeClose, {
      args: [action, Value.current],
      done: () => {
        switch (action) {
          case 'cancel':
            onCancel?.(Value.current)
            break
          case 'confirm':
            onConfirm?.(Value.current)
            break
          case 'overlay':
            onPressOverlay?.(Value.current)
            break
          default:
            break
        }

        setLoading(false)
        setVisible(false)
      },
      canceled: () => {
        setLoading(false)
      },
    })
  })

  const onPressCancel = useCallback(() => {
    doAction('cancel')
  }, [doAction])

  const onPressConfirm = useCallback(() => {
    doAction('confirm')
  }, [doAction])

  const onPressPopupOverlay = useCallback(() => {
    doAction('overlay')
  }, [doAction])

  const onRequestClose = useCallback(() => {
    onPressPopupOverlay()
    return true
  }, [onPressPopupOverlay])

  const dataPickerViewProps = pick(
    restProps,
    DATE_PICKER_VIEW_PROPS_KEYS,
  ) as DatePickerViewProps
  const popupProps = omit(restProps, DATE_PICKER_VIEW_PROPS_KEYS)

  return (
    <Popup
      {...popupProps}
      onRequestClose={onRequestClose}
      visible={visible}
      onPressOverlay={onPressPopupOverlay}
      position="bottom"
      round>
      <Popup.Header
        showClose={false}
        title={title}
        leftExtra={
          <Text
            suppressHighlighting
            style={STYLES_PICKER.cancel_text}
            onPress={loading ? undefined : onPressCancel}>
            {cancelButtonText ?? locale.cancelButtonText}
          </Text>
        }
        rightExtra={
          <Text
            suppressHighlighting
            style={STYLES_PICKER.confirm_text}
            onPress={loading ? undefined : onPressConfirm}>
            {confirmButtonText ?? locale.confirmButtonText}
          </Text>
        }
      />

      <DatePickerView
        {...dataPickerViewProps}
        loading={loading}
        onChange={onChange}
      />

      <View style={{ height: insets.bottom + CV_PICKER.picker_bottom_gap }} />
    </Popup>
  )
}

export default memo(DatePickerSingleMethod)
