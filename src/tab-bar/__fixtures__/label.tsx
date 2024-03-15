/**
 * title: 文字突出
 * description: 比较特殊的场景，文字突出的表现方式，适合出现在分类场景。
 */

import React, { useState } from 'react'
import { View, type ViewStyle } from 'react-native'

import { TabBar, Space } from '@fruits-chain/react-native-xiaoshu'
import {
  EyeOutline,
  SearchOutline,
  VolumeOutline,
} from '@fruits-chain/icons-react-native'

const bottomBarIconStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  // 无论大小图标都保持同一个占用空间
  width: 20,
  height: 20,
}

const bottomBar = [
  {
    value: '1',
    label: '首页',
    iconRender: (color: string) => (
      <EyeOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
  {
    value: '2',
    label: '发现页',
    iconRender: (color: string) => (
      <SearchOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
  {
    value: '3',
    label: '更多设置',
    iconRender: (color: string) => (
      <VolumeOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
]

const BasicTabBarLabel: React.FC = () => {
  const [value, setValue] = useState(bottomBar[0].value)

  return (
    <Space head>
      <TabBar
        labelBulge
        activeTextColor="#333"
        tabAlign="left"
        indicator
        indicatorWidth={20}
        safeAreaInsetBottom={false}
        options={[
          ...bottomBar.map(({ iconRender, ...props }) => props),
          ...bottomBar.map(({ iconRender, ...props }) => ({
            ...props,
            value: `${props.value}_1`,
          })),
          ...bottomBar.map(({ iconRender, ...props }) => ({
            ...props,
            value: `${props.value}_2`,
          })),
        ]}
      />
      <TabBar
        labelBulge
        activeTextColor="#333"
        safeAreaInsetBottom={false}
        options={[...bottomBar.map(({ iconRender, ...props }) => props)]}
      />

      <View>
        <TabBar
          labelBulge
          activeTextColor="#333"
          indicator
          safeAreaInsetBottom={false}
          options={bottomBar}
          value={value}
          onChange={v => {
            setValue(v)
          }}
        />
        <View style={{ height: 40, backgroundColor: '#098' }} />
      </View>
    </Space>
  )
}

export default BasicTabBarLabel
