/**
 * title: 自定义
 * description: 支持自定义激活、未激活的值、颜色。
 */

import React from 'react'

import { Switch, Space } from '@fruits-chain/react-native-xiaoshu'

type TSwitch = '3' | '4'

const BasicSwitchCustom: React.FC = () => {
  return (
    <Space direction="vertical">
      <Switch
        defaultValue="1"
        activeValue="1"
        activeChildren="1"
        inactiveValue="2"
        inactiveChildren="2"
        onChange={p => {
          console.log(p)
        }}
      />
      <Switch<TSwitch, TSwitch>
        defaultValue="3"
        activeValue="3"
        activeChildren="3"
        inactiveValue="4"
        inactiveChildren="4"
        onChange={p => {
          console.log(p)
        }}
      />
      <Switch defaultValue activeColor="#098" inactiveColor="#876" />
    </Space>
  )
}

export default BasicSwitchCustom
