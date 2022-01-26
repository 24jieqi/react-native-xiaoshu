/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Text, ScrollView } from 'react-native'

import { TabBar, Icon, Button } from '@fruits-chain/react-native-xiaoshu'

const bottomBarIconStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  // 无论大小图表都保持同一个占用空间
  width: 20,
  height: 20,
  // backgroundColor: '#f30',
}
const bottomBar = [
  {
    value: 1,
    label: '首页',
    iconRender: (color: string) => (
      <Icon.EyeOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
  {
    value: 2,
    label: '其他',
    iconRender: (color: string) => (
      <Icon.SearchOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
  {
    value: 3,
    label: '更多',
    iconRender: (color: string) => (
      <Icon.VolumeOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
]

const BasicSwitch: React.FC = () => {
  const [value1, setValue1] = useState(bottomBar[1].value)

  return (
    <>
      <ScrollView>
        <Text>基础用法</Text>

        <TabBar
          safeAreaInsetBottom={false}
          options={bottomBar}
          value={value1}
          onChange={v => {
            setValue1(v as number)
          }}
        />

        <View style={{ height: 10 }} />

        <Button
          text="重置"
          danger
          onPress={() => {
            setValue1(bottomBar[1].value)
          }}
        />
      </ScrollView>

      <TabBar options={bottomBar} defaultValue={bottomBar[0].value} />
    </>
  )
}

export default BasicSwitch
