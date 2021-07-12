import React from 'react'
import { View } from 'react-native'

import { NavBar } from 'react-native-xiaoshu'

const BasicNavBar: React.FC = () => {
  return (
    <>
      <View style={{ height: 20 }} />

      <NavBar title="普通的" />

      <View style={{ height: 20 }} />

      <NavBar title="隐藏返回按钮" leftArrow={false} />

      <View style={{ height: 20 }} />

      <NavBar title="标题" leftText="左侧文案" />

      <View style={{ height: 20 }} />

      <NavBar title="标题" leftText="左侧文案" rightText="右侧文案" />

      <View style={{ height: 20 }} />
    </>
  )
}

export default BasicNavBar
