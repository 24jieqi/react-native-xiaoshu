/**
 * title: 基础
 * description: 内部无滚动，仅头部可以触发滑动打开、关闭。
 */

import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FloatingPanel } from '@fruits-chain/react-native-xiaoshu'

const BaseFloatingPanel: React.FC = () => {
  const insets = useSafeAreaInsets()
  const { height } = useWindowDimensions()

  const anchorEnd = height - insets.top - 100

  return (
    <>
      <View
        style={{
          height: 400,
          backgroundColor: '#456',
        }}>
        <Text>底部内容，可以是地图或图片</Text>
      </View>

      <FloatingPanel anchorEnd={anchorEnd} draggingOnContent={false}>
        <Text>434</Text>
        <View style={{ backgroundColor: '#ff8', height: 400 }} />
        <View style={{ backgroundColor: '#f18', height: 400 }} />
        <View style={{ backgroundColor: '#f98', height: 400 }} />
        <View style={{ backgroundColor: '#a18', height: 400 }} />
        <View style={{ backgroundColor: '#a58', height: 400 }} />
        <View style={{ backgroundColor: '#b98', height: 400 }} />
        <View style={{ backgroundColor: '#C18', height: 400 }} />
        <View style={{ backgroundColor: '#C48', height: 400 }} />
        <Text>end</Text>
      </FloatingPanel>
    </>
  )
}

export default BaseFloatingPanel
