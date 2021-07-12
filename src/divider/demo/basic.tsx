import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Divider } from 'react-native-xiaoshu'

const BasicDivider: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>基础用法</Text>
      </View>

      <Divider />

      <View style={{ height: 20 }} />

      <View>
        <Text>展示文本</Text>
      </View>

      <Divider>文字</Divider>

      <View style={{ height: 20 }} />

      <View>
        <Text>内容位置</Text>
      </View>

      <Divider contentPosition="left">文字</Divider>

      <Divider contentPosition="right">文字</Divider>

      <View style={{ height: 20 }} />

      <View>
        <Text>虚线</Text>
      </View>

      <Divider dashed>文字</Divider>

      <View style={{ height: 20 }} />

      <View>
        <Text>自定义样式</Text>
      </View>

      <Divider
        style={{ backgroundColor: '#999' }}
        textStyle={{ color: '#690' }}
        borderStyle={{ borderColor: '#666' }}>
        文字
      </Divider>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicDivider
