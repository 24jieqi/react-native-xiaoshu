/**
 * title: 左对齐
 * description: 默认子选项居中对齐，如果选项太多可以左对齐，且出现滚动。
 */

import React from 'react'
import type { ViewStyle } from 'react-native'

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
    value: 1,
    label: '通讯录',
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
    value: 2,
    label: '发现',
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
    value: 3,
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

const bottomBar2 = bottomBar.map(({ value, label }) => ({
  badge: '4',
  value: 10 + value,
  label: `${label}_${label}`,
}))

const bottomBar3 = [
  ...bottomBar2,
  ...bottomBar2.map(({ value, label, badge }) => ({
    badge,
    value: value * 2,
    label: `${label}_2`,
  })),
]

const BasicTabBarAlign: React.FC = () => {
  return (
    <Space head>
      <TabBar
        safeAreaInsetBottom={false}
        options={bottomBar3}
        defaultValue={bottomBar3[0].value}
        height={50}
        tabAlign="left"
        // 指示器与文字同宽
        indicator
      />
      <TabBar
        safeAreaInsetBottom={false}
        options={bottomBar3}
        defaultValue={bottomBar3[0].value}
        height={50}
        tabAlign="left"
        // 指示器固定20
        indicator
        indicatorWidth={20}
      />
      <TabBar
        safeAreaInsetBottom={false}
        options={bottomBar3}
        defaultValue={bottomBar3[0].value}
        height={50}
        tabAlign="left"
        // 指示器与每一项宽一致
        indicator
        indicatorWidth={0}
      />
    </Space>
  )
}

export default BasicTabBarAlign
