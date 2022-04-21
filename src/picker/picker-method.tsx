import React, { useState, useEffect, useCallback, useRef, memo } from 'react'

import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'
import {
  getDataType,
  buildOptions,
  buildSelectedValue,
} from '../picker-view/helper/picker'
import type { PickerValue, Column } from '../picker-view/interface'

import type { PickerMethodProps, PickerAction } from './interface'
import Picker from './picker'

type ValueData = { values: PickerValue[]; columns: Column[] }

const buildValue = (values: PickerValue[], columns: Column[]): ValueData => {
  const dataType = getDataType(columns)
  const [options] = buildOptions(dataType, columns, values)
  const [v, o] = buildSelectedValue(values, options)

  return {
    values: v,
    columns: o,
  }
}

const PickerMethod: React.FC<PickerMethodProps> = ({
  onCancel,
  onConfirm,
  onPressOverlay,
  beforeClose,

  ...restProps
}) => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const Value = useRef<ValueData>(
    buildValue(restProps.defaultValue || [], restProps.columns),
  )

  useEffect(() => {
    setVisible(true)
  }, [])

  const onChange = useCallback((v: PickerValue[], c: Column[]) => {
    Value.current = {
      values: v,
      columns: c,
    }
  }, [])

  const doAction = usePersistFn((action: PickerAction) => {
    setLoading(true)

    callInterceptor(beforeClose, {
      args: [action, Value.current.values, Value.current.columns],
      done: () => {
        switch (action) {
          case 'cancel':
            onCancel?.(Value.current.values, Value.current.columns)
            break
          case 'confirm':
            onConfirm?.(Value.current.values, Value.current.columns)
            break
          case 'overlay':
            onPressOverlay?.(Value.current.values, Value.current.columns)
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

  return (
    <Picker
      {...restProps}
      visible={visible}
      onChange={onChange}
      onCancel={onPressCancel}
      onConfirm={onPressConfirm}
      onPressOverlay={onPressPopupOverlay}
      loading={loading}
      onRequestClose={onRequestClose}
    />
  )
}

export default memo(PickerMethod)
