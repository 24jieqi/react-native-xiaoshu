import React, { useState, useEffect, useCallback, useRef, memo } from 'react'

import type { PickerValue, Column } from '../picker-view/interface'
import {
  getDataType,
  buildOptions,
  buildSelectedValue,
} from '../picker-view/helper/picker'
import { usePersistFn } from '../hooks'
import { noop } from '../helpers'
import type { PickerMethodProps } from './interface'
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

  ...restProps
}) => {
  const [visible, setVisible] = useState(false)
  const Value = useRef<ValueData>(
    buildValue(restProps.defaultValue || [], restProps.columns),
  )

  const onCancelPersistFn = usePersistFn(onCancel || noop)
  const onConfirmPersistFn = usePersistFn(onConfirm || noop)
  const onPressOverlayPersistFn = usePersistFn(onPressOverlay || noop)

  useEffect(() => {
    setVisible(true)
  }, [])

  const onChange = useCallback((v: PickerValue[], c: Column[]) => {
    Value.current = {
      values: v,
      columns: c,
    }
  }, [])

  const onPressCancel = useCallback(() => {
    setVisible(false)
    onCancelPersistFn(Value.current.values, Value.current.columns)
  }, [onCancelPersistFn])

  const onPressConfirm = useCallback(() => {
    setVisible(false)
    onConfirmPersistFn(Value.current.values, Value.current.columns)
  }, [onConfirmPersistFn])

  const onPressPopupOverlay = useCallback(() => {
    setVisible(false)
    onPressOverlayPersistFn(Value.current.values, Value.current.columns)
  }, [onPressOverlayPersistFn])

  return (
    <Picker
      {...restProps}
      visible={visible}
      onChange={onChange}
      onCancel={onPressCancel}
      onConfirm={onPressConfirm}
      onPressOverlay={onPressPopupOverlay}
    />
  )
}

export default memo(PickerMethod)
