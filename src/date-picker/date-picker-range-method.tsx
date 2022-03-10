import React, { useState, useRef, useEffect, memo } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'
import { varCreator as varCreatorPicker } from '../picker/style'
import Popup from '../popup'
import { useThemeTokens, createVar } from '../theme'

import DatePickerRangeView from './date-picker-range-view'
import type { DatePickerRangeMethodProps, DatePickerAction } from './interface'

const DatePickerRangeMethod: React.FC<DatePickerRangeMethodProps> = ({
  title,
  onCancel,
  onPressOverlay,
  beforeClose,

  // DatePickerRangeView
  mode,
  defaultValue,
  confirmButtonText,
  resetButtonText,
  placeholder,
  onConfirm,
  max,
  min,
  renderLabel,

  ...restProps
}) => {
  const TOKENS = useThemeTokens()
  const CV_PICKER = createVar(TOKENS, varCreatorPicker)
  const insets = useSafeAreaInsets()

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const Values = useRef<[Date, Date]>(
    defaultValue && defaultValue.length === 2 ? defaultValue : [null, null],
  )

  useEffect(() => {
    setVisible(true)
  }, [])

  const onChangeRangeView = usePersistFn((d: [Date, Date]) => {
    Values.current = d
  })

  const doAction = usePersistFn((action: DatePickerAction) => {
    setLoading(true)

    callInterceptor(beforeClose, {
      args: [action, Values.current],
      done: () => {
        switch (action) {
          case 'cancel':
            onCancel?.(Values.current)
            break
          case 'confirm':
            onConfirm?.(Values.current)
            break
          case 'overlay':
            onPressOverlay?.(Values.current)
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

  const onPressPopupOverlay = usePersistFn(() => {
    doAction('overlay')
  })

  const onPressClose = usePersistFn(() => {
    doAction('cancel')
  })

  const onPressConfirm = usePersistFn(() => {
    doAction('confirm')
  })

  const rangeProps = {
    mode,
    defaultValue: Values.current,
    confirmButtonText,
    resetButtonText,
    placeholder,
    onConfirm: onPressConfirm,
    max,
    min,
    renderLabel,
  }

  return (
    <Popup
      {...restProps}
      visible={visible}
      onPressOverlay={onPressPopupOverlay}
      position="bottom"
      round>
      <Popup.Header title={title} onClose={onPressClose} />

      <DatePickerRangeView
        {...rangeProps}
        onChange={onChangeRangeView}
        loading={loading}
      />

      <View style={{ height: insets.bottom + CV_PICKER.picker_bottom_gap }} />
    </Popup>
  )
}

export default memo(DatePickerRangeMethod)
