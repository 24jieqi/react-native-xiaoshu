/**
 * title: 时间段选择视图
 * description: 开始、结束时间选择视图，适用于个性化时间选择场景，支持受控、非受控两种方式。
 */

import React, { useState } from 'react'

import {
  DatePicker,
  Card,
  Space,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'

const defaultValueView: [Date, Date] = [
  new Date(2020, 6, 20, 18, 40, 10),
  new Date(2022, 1, 2, 18, 40, 10),
]

const onChangeLog = (v: [Date, Date]) => {
  console.log('onChangeLog 0 => ', [v][0])
  console.log('onChangeLog 1 => ', [v][1])
}

const BasicDatePickerViewRangeView: React.FC = () => {
  const [value, setValue] = useState(defaultValueView)

  return (
    <Card title="时间段视图">
      <Space>
        <DatePicker.RangeView onChange={onChangeLog} />
        <DatePicker.RangeView defaultValue={defaultValueView} />
        <DatePicker.RangeView value={value} />
        <DatePicker.RangeView value={value} onChange={setValue} />
        <DatePicker.RangeView
          value={value}
          onChange={setValue}
          clearable
          onClear={() => {
            Toast('根据业务自定义清空逻辑')
            // 例如重置时间后关闭弹出层
            // setValue([null, null])
          }}
        />
      </Space>
    </Card>
  )
}

export default BasicDatePickerViewRangeView
