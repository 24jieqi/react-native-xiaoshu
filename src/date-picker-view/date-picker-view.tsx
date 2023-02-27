import React, { useEffect } from 'react'

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

  testID,
  ...restProps
}) => {
  const isControlled = 'value' in restProps
  const isNoDefaultValue = 'defaultValue' in restProps
  const [value, onChange] = useControllableValue(restProps, {
    defaultValue: new Date(),
  })
  const [values, columns, onChangePicker, minDate, maxDate] = useDatePicker({
    mode,
    value,
    onChange,
    min,
    max,
    renderLabel,
  })

  const minDateTimestamp = minDate.getTime()
  const maxDateTimestamp = maxDate.getTime()

  useEffect(() => {
    // 非受控的情况、并且没有默认值才去同步数据
    // 既然有默认数据了，由外面自己负责
    // 把数据同步到内部状态，初始化的时候默认当前时间
    if (!isControlled && !isNoDefaultValue) {
      let _today = new Date()
      const _todayTimestamp = _today.getTime()
      if (_todayTimestamp < minDateTimestamp) {
        _today = new Date(minDateTimestamp)
      }
      if (_todayTimestamp > maxDateTimestamp) {
        _today = new Date(maxDateTimestamp)
      }

      onChange(_today)
    }
  }, [
    isControlled,
    isNoDefaultValue,
    onChange,
    minDateTimestamp,
    maxDateTimestamp,
  ])

  // console.log('columns   ====>  ', columns)
  // console.log('values   ====>  ', values)

  return (
    <PickerView
      testID={testID}
      loading={loading}
      columns={columns}
      value={values}
      onChange={onChangePicker}
    />
  )
}

export default DatePickerView
