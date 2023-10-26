import React from 'react'
import { Text, ScrollView, View } from 'react-native'

import { Space } from '@fruits-chain/react-native-xiaoshu'

import BasicSwitchBase from './base'
import BasicSwitchText from './text'
import BasicSwitchDisabled from './disabled'
import BasicSwitchSize from './size'
import BasicSwitchCustom from './custom'

const titleStyle = {
  fontSize: 18,
  color: '#333',
  paddingTop: 16,
}

const BasicSwitch: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Space>
        <Text style={titleStyle}>基础</Text>

        <BasicSwitchBase />

        <Text style={titleStyle}>文字和图标</Text>

        <BasicSwitchText />

        <Text style={titleStyle}>不可用</Text>

        <BasicSwitchDisabled />

        <Text style={titleStyle}>大小</Text>

        <BasicSwitchSize />

        <Text style={titleStyle}>自定义</Text>

        <BasicSwitchCustom />

        <View style={{ height: 50 }} />
      </Space>
    </ScrollView>
  )
}

export default BasicSwitch
