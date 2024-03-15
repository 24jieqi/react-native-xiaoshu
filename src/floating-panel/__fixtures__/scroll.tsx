/**
 * title: 局部滚动
 * description: 内部有滚动，未打开时整个面板都可以触发打开，打开时可以滚动内容同时向下滑动可以触发关闭。新开窗口模拟移动设备体验更好。
 */

import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FloatingPanel } from '@fruits-chain/react-native-xiaoshu'

const ScrollFloatingPanel: React.FC = () => {
  const insets = useSafeAreaInsets()
  const { height } = useWindowDimensions()

  const anchorStart = insets.bottom + 100
  const anchorEnd = height - insets.top - 100

  return (
    <>
      <View
        style={{
          height: 400,
          backgroundColor: '#981',
        }}>
        <Text>底部内容，可以是地图或图片</Text>
      </View>

      <FloatingPanel.ScrollView
        title="FloatingPanel"
        anchorStart={anchorStart}
        anchorEnd={anchorEnd}>
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
      </FloatingPanel.ScrollView>
    </>
  )
}

export default ScrollFloatingPanel
