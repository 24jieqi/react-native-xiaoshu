/**
 * title: 指示器
 * description: 不同的设施指示器不一样。
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

const BasicTabBarIndicator: React.FC = () => {
  return (
    <Space head>
      <TabBar
        safeAreaInsetBottom={false}
        options={bottomBar}
        defaultValue={bottomBar[0].value}
        height={50}
        // 指示器与文字同宽
        indicator
      />
      <TabBar
        safeAreaInsetBottom={false}
        options={bottomBar}
        defaultValue={bottomBar[0].value}
        height={50}
        // 指示器固定20
        indicator
        indicatorWidth={20}
      />
      <TabBar
        safeAreaInsetBottom={false}
        options={bottomBar}
        defaultValue={bottomBar[0].value}
        height={50}
        // 指示器与每一项宽一致
        indicator
        indicatorWidth={0}
      />
    </Space>
  )
}

export default BasicTabBarIndicator
