import React from 'react'
import { View, Text } from 'react-native'

import { NavBar } from '@fruits-chain/react-native-xiaoshu'

const BasicNavBar: React.FC = () => {
  return (
    <>
      <View style={{ height: 20 }} />

      <NavBar
        title="普通的"
        onPressBackArrow={() => {
          console.log('点击返回')
        }}
      />

      <View style={{ height: 20 }} />

      <NavBar title="隐藏返回按钮" showBackArrow={false} />

      <View style={{ height: 20 }} />

      <NavBar title="标题" leftExtra={<Text>左侧内容区域</Text>} />

      <View style={{ height: 20 }} />

      <NavBar
        title="标题"
        leftExtra={<Text>左侧内容区域</Text>}
        rightExtra={<Text>右侧内容区域</Text>}
      />

      <View style={{ height: 20 }} />
    </>
  )
}

export default BasicNavBar
