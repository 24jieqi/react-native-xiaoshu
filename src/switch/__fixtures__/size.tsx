/**
 * title: 大小
 * description: 通过 `size` 可以自定义元素大小。
 */

import React from 'react'

import { Switch, Space } from '@fruits-chain/react-native-xiaoshu'
import { Text } from 'react-native'

const BasicSwitchSize: React.FC = () => {
  return (
    <Space direction="vertical">
      <Switch size={60} defaultValue activeChildren="size={60}" />
      <Switch
        size={60}
        defaultValue
        activeChildren={
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
            }}>{`size={60}`}</Text>
        }
      />
    </Space>
  )
}

export default BasicSwitchSize
