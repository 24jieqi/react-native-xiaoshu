import {
  EyeOutline,
  SearchOutline,
  VolumeOutline,
} from '@fruits-chain/icons-react-native'
import React from 'react'
import type { ViewStyle } from 'react-native'
import { ScrollView, Text } from 'react-native'

import { TabBar, Space, Divider } from '@fruits-chain/react-native-xiaoshu'

import BasicTabBarAlign from './align'
import BasicTabBarBase from './base'
import BasicTabBarIndicator from './indicator'
import BasicTabBarLabel from './label'

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
    value: 2,
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

const BasicSwitch: React.FC = () => {
  return (
    <>
      <ScrollView>
        <Space head>
          <Text>基本</Text>

          <BasicTabBarBase />

          <Divider type="dark">.</Divider>

          <Text>指示器</Text>

          <BasicTabBarIndicator />

          <Divider type="dark">.</Divider>

          <Text>左对齐</Text>

          <BasicTabBarAlign />

          <Divider type="dark">.</Divider>

          <Text>文字突出</Text>

          <BasicTabBarLabel />

          <Divider type="dark">.</Divider>
        </Space>
      </ScrollView>

      <TabBar options={bottomBar} defaultValue={bottomBar[0].value} />
    </>
  )
}

export default BasicSwitch
