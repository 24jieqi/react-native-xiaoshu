import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, { useState, useEffect, useRef, useCallback, memo } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import DatePickerView from '../date-picker-view'
import type { DatePickerViewProps } from '../date-picker-view/interface'
import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'
import { createStyles } from '../picker/style'
import Popup from '../popup'
import PopupHeader from '../popup/header'
import { useTheme, widthStyle } from '../theme'

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
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  onCancel,
  onConfirm,
  onPressOverlay,
  beforeClose,

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
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

  const dataPickerViewProps = pick(
    restProps,
    DATE_PICKER_VIEW_PROPS_KEYS,
  ) as DatePickerViewProps
  const popupProps = omit(restProps, DATE_PICKER_VIEW_PROPS_KEYS)

  return (
    <Popup
      {...popupProps}
      visible={visible}
      onPressOverlay={onPressPopupOverlay}
      position="bottom"
      round>
      <PopupHeader
        showClose={false}
        title={title}
        leftExtra={
          <Text
            style={STYLES.cancel_text}
            onPress={loading ? undefined : onPressCancel}>
            {cancelButtonText}
          </Text>
        }
        rightExtra={
          <Text
            style={STYLES.confirm_text}
            onPress={loading ? undefined : onPressConfirm}>
            {confirmButtonText}
          </Text>
        }
      />

      <DatePickerView
        {...dataPickerViewProps}
        loading={loading}
        onChange={onChange}
      />

      <View style={{ height: insets.bottom + THEME_VAR.picker_bottom_gap }} />
    </Popup>
  )
}

export default memo(DatePickerSingleMethod)
