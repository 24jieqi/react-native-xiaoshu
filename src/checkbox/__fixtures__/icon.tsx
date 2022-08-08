/**
 * title: 图标
 * desc: 复选框选择图标，可以独立使用。
 */

import React from 'react'
import { Checkbox, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const CheckboxIcon: React.FC = () => {
  return (
    <Card title="图标">
      <Space>
        <Checkbox.Icon
          onPress={() => {
            console.log('-')
          }}
        />
        <Checkbox.Icon active />
        <Checkbox.Icon active activeColor="#098" />
        <Checkbox.Icon
          disabled
          onPress={() => {
            console.log('+')
          }}
        />
        <Checkbox.Icon disabled active />
        <Checkbox.Icon disabled active activeColor="#098" />
      </Space>
    </Card>
  )
}

export default CheckboxIcon
