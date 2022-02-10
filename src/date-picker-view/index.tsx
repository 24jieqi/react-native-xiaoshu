import React from 'react'

import { useControllableValue } from '../hooks'
import PickerView from '../picker-view'

import type { DatePickerViewProps } from './interface'
import useDatePicker from './useDatePicker'

const DatePickerView: React.FC<DatePickerViewProps> = ({
  mode = 'Y-m',
  min,
  max,
  renderLabel,
  loading,

  ...restProps
}) => {
  const [value, onChange] = useControllableValue(restProps, {
    defaultValue: new Date(),
  })
  const [values, columns, onChangePicker] = useDatePicker({
    mode,
    value,
    onChange,
    min,
    max,
    renderLabel,
  })

  // console.log('columns   ====>  ', columns)
  // console.log('values   ====>  ', values)

  return (
    <PickerView
      loading={loading}
      columns={columns}
      value={values}
      onChange={onChangePicker}
    />
  )
}

export default DatePickerView
