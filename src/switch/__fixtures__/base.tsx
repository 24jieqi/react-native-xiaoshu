/**
 * title: 基本
 * description: 最简单的用法，受控、非受控。
 */

import React, { useState } from 'react'

import { Switch, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicSwitchBase: React.FC = () => {
  const [state, setState] = useState(false)

  return (
    <Space direction="vertical">
      <Switch
        value={state}
        onChange={p => {
          console.log(p)
          setState(p)
        }}
        onPress={() => {
          console.log('基础用法')
        }}
      />
      <Switch
        defaultValue
        onChange={p => {
          console.log(p)
        }}
      />
    </Space>
  )
}

export default BasicSwitchBase
