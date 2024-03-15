/**
 * title: Checkbox 组
 * description: 快捷组织一组可选项，可选项多的场景推荐竖向，候选项少的场景推荐横向。
 */

import React, { useState } from 'react'
import {
  Checkbox,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'
import { Text } from 'react-native'

const options = new Array(6).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}))

const CheckboxGroup: React.FC = () => {
  const [value1, setValue1] = useState<number>()
  const [value2, setValue2] = useState<number[]>([])

  return (
    <Space>
      <Card title="Checkbox 组:单选">
        <Text>默认选中后点击可以取消选中</Text>
        <Checkbox.Group options={options} />

        <Divider>·</Divider>

        <Text>选中后点击可以不取消选中</Text>
        <Checkbox.Group options={options} deselect={false} />

        <Divider>·</Divider>

        <Text>选项多了，scrollable 左右滚动</Text>
        <Checkbox.Group
          options={options}
          value={value1}
          direction="horizontal"
          scrollable
        />

        <Divider>·</Divider>

        <Text>受控，不响应 onChange</Text>
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

        <Divider>·</Divider>

        <Text>受控，不响应 onChange，选项多了，scrollable 左右滚动</Text>
        <Checkbox.Group
          multiple
          options={options}
          value={value2}
          direction="horizontal"
          scrollable
        />

        <Divider>·</Divider>

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
        <Text>选项多了无法左右滚动</Text>
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

        <Divider>·</Divider>

        <Text>选项多了，scrollable 左右滚动</Text>
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
