import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Loading, LoadingCircular, LoadingSpinner } from 'react-native-xiaoshu'

const BasicLoading: React.FC = () => {
  return (
    <ScrollView>
      <Text>单独使用图标</Text>

      <LoadingCircular />
      <LoadingSpinner />

      <View style={{ height: 20 }} />

      <Text>加载类型</Text>

      <View style={{ flexDirection: 'row' }}>
        <Loading />
        <Loading type="spinner" />
      </View>

      <View style={{ height: 20 }} />

      <Text>自定义颜色</Text>

      <View style={{ flexDirection: 'row' }}>
        <Loading color="#f30" />
        <Loading color="#690" type="spinner" />
      </View>

      <View style={{ height: 20 }} />

      <Text>自定义大小</Text>

      <View style={{ flexDirection: 'row' }}>
        <Loading size={18} />
        <Loading size={18} type="spinner" />
      </View>

      <View style={{ height: 20 }} />

      <Text>加载文案</Text>

      <Loading>加载文案...</Loading>

      <View style={{ height: 20 }} />

      <Text>垂直排列</Text>

      <Loading vertical>加载文案...</Loading>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicLoading
