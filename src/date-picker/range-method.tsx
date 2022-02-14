import React, { useState, useRef, useEffect, memo } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'
import Popup from '../popup'
import { useTheme } from '../theme'

import type { DatePickerRangeMethodProps, DatePickerAction } from './interface'
import DatePickerRangeView from './range-view'

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
  const THEME_VAR = useTheme()
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
    defaultValue,
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

      <View style={{ height: insets.bottom + THEME_VAR.picker_bottom_gap }} />
    </Popup>
  )
}

export default memo(DatePickerRangeMethod)
