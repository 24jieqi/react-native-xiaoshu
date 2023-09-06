/**
 * title: Checkbox 组
 * desc: 方便的从数组生成 Checkbox 组，候选项多推荐竖向，候选项少推荐横向。
 */

import React, { useState } from 'react'
import {
  Checkbox,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'

const options = new Array(5).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}))

const CheckboxGroup: React.FC = () => {
  const [value1, setValue1] = useState<number>()
  const [value2, setValue2] = useState<number[]>([])

  return (
    <Space>
      <Card title="Checkbox 组:单选">
        <Checkbox.Group options={options} />
        <Divider />
        <Checkbox.Group
          options={options}
          value={value1}
          direction="horizontal"
          scrollable
        />
        <Divider />
        <Checkbox.Group
          options={options}
          value={value1}
          direction="horizontal"
          wrap
          onChange={v => {
            setValue1(v as number)
          }}
        />
      </Card>
      <Card title="Checkbox 组:多选">
        <Checkbox.Group multiple options={options} />
        <Divider />
        <Checkbox.Group
          multiple
          options={options}
          value={value2}
          direction="horizontal"
          scrollable
        />
        <Divider />
        <Checkbox.Group
          multiple
          options={options}
          value={value2}
          direction="horizontal"
          wrap
          onChange={v => {
            setValue2(v as number[])
          }}
        />
      </Card>
      <Card title="Checkbox 组:自定义样式">
        <Checkbox.Group
          direction="horizontal"
          gap={12}
          checkboxLabelTextStyle={{
            color: '#666',
            fontSize: 12,
          }}
          iconSize={16}
          activeColor="#098"
          options={options}
        />
        <Divider />
        <Checkbox.Group
          options={options.map(o => ({
            ...o,
            iconSize: 16,
            labelTextStyle: {
              color: '#f30',
            },
            activeColor: '#f30',
            gap: 16,
          }))}
          direction="horizontal"
          scrollable
        />
      </Card>
    </Space>
  )
}

export default CheckboxGroup
