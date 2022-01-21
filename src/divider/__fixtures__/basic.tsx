import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Divider } from '@fruits-chain/react-native-xiaoshu'

const BasicDivider: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Text>基础用法</Text>

      <View style={{ height: 20 }} />

      <Divider />

      <View style={{ height: 20 }} />

      <Divider type="light" />

      <View style={{ height: 20 }} />

      <Divider dashed />

      <View style={{ height: 20 }} />

      <Divider dashed type="light" />

      <View style={{ height: 20 }} />

      <Text>自定义颜色</Text>

      <View style={{ height: 20 }} />

      <Divider color="#000" />

      <View style={{ height: 20 }} />

      <Divider color="#000" dashed />

      <View style={{ height: 20 }} />

      <Text>展示文本</Text>

      <View style={{ height: 20 }} />

      <Divider>文字</Divider>

      <View style={{ height: 20 }} />

      <Text>内容位置</Text>

      <View style={{ height: 20 }} />

      <Divider contentPosition="left">文字</Divider>

      <View style={{ height: 20 }} />

      <Divider contentPosition="right">文字</Divider>

      <View style={{ height: 20 }} />

      <Text>虚线</Text>

      <View style={{ height: 20 }} />

      <Divider dashed>文字</Divider>

      <View style={{ height: 20 }} />

      <Divider contentPosition="left" dashed>
        文字
      </Divider>

      <View style={{ height: 20 }} />

      <Divider contentPosition="right" dashed>
        文字
      </Divider>

      <View style={{ height: 20 }} />

      <Text>自定义样式</Text>

      <View style={{ height: 20 }} />

      <Divider
        style={{ backgroundColor: '#999' }}
        textStyle={{ color: '#690' }}>
        文字
      </Divider>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicDivider
