import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Divider } from '@fruits-chain/react-native-xiaoshu'

const BasicDivider: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Text>基础用法</Text>

      <Divider />

      <Divider type="light" />

      <Divider dashed />

      <Divider dashed type="light" />

      <Text>自定义颜色</Text>

      <Divider color="#000" />

      <Divider color="#000" dashed />

      <Text>展示文本</Text>

      <Divider>文字</Divider>

      <Text>内容位置</Text>

      <Divider contentPosition="left">文字</Divider>

      <Divider contentPosition="right">文字</Divider>

      <Text>虚线</Text>

      <Divider dashed>文字</Divider>

      <Divider contentPosition="left" dashed>
        文字
      </Divider>

      <Divider contentPosition="right" dashed>
        文字
      </Divider>

      <Text>自定义样式</Text>

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
