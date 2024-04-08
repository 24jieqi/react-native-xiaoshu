/**
 * title: 选项按钮组
 * description: 方便的从数组生成 Button.Option 组。
 */

import React, { memo, useState } from 'react'

import {
  Button,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'
import { View } from 'react-native'

const options = new Array(10).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
  badge: index === 2 ? 10 : undefined,
  disabled: index === 3,
}))

const ButtonOptionGroup: React.FC = () => {
  const [value1, setValue1] = useState<number>()
  const [value2, setValue2] = useState<number[]>([])

  return (
    <Space>
      <Card title="选项按钮组" square>
        <Space>
          <Button.OptionGroup
            options={options}
            scrollable
            defaultValue={2}
            deselect={false}
            round
          />

          <Divider>·</Divider>

          <Button.OptionGroup
            options={options}
            type="outline"
            scrollable
            defaultValue={2}
          />

          <Divider>·</Divider>

          <View
            style={{
              padding: 4,
              backgroundColor: '#f5f5f5',
            }}>
            <Button.OptionGroup
              options={options}
              type="white"
              scrollable
              defaultValue={2}
            />
          </View>

          <Divider>·</Divider>

          <Button.OptionGroup options={options} multiple scrollable />

          <Divider>·</Divider>

          <Button.OptionGroup
            options={options}
            scrollable
            activeHighlight={false}
          />
        </Space>
      </Card>

      <Card title="选项按钮组:受控" square>
        <Space>
          <Button.OptionGroup
            options={options}
            value={value1}
            onChange={v => {
              console.log('v => ', v)
              setValue1(v as number)
            }}
            scrollable
          />

          <Divider>·</Divider>

          <Button.OptionGroup
            options={options}
            multiple
            value={value2}
            onChange={v => {
              console.log('v => ', v)
              setValue2(v as number[])
            }}
            scrollable
          />
          <Button
            text="清空"
            disabled={!value2?.length}
            onPress={() => {
              setValue2([])
            }}
          />
        </Space>
      </Card>
    </Space>
  )
}

export default memo(ButtonOptionGroup)
