import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Divider } from 'react-native-xiaoshu'

const BasicDivider: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Text>基础用法</Text>

      <Divider />

      <View style={{ height: 20 }} />

      <Text>展示文本</Text>

      <Divider>文字</Divider>

      <View style={{ height: 20 }} />

      <Text>内容位置</Text>

      <Divider contentPosition="left">文字</Divider>

      <Divider contentPosition="right">文字</Divider>

      <View style={{ height: 20 }} />

      <Text>虚线</Text>

      <Divider dashed>文字</Divider>

      <View style={{ height: 20 }} />

      <Text>自定义样式</Text>

      <Divider
        style={{ backgroundColor: '#999' }}
        textStyle={{ color: '#690' }}
        borderStyle={{ borderColor: '#666' }}>
        文字
      </Divider>

      <Divider leftBorderStyle={{ borderColor: '#000' }}>文字</Divider>

      <Divider rightBorderStyle={{ borderColor: '#000', borderWidth: 4 }}>
        文字
      </Divider>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicDivider
