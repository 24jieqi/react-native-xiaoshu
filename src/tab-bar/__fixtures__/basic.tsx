/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import type { ViewStyle } from 'react-native'
import { ScrollView, Text } from 'react-native'

import {
  TabBar,
  Button,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'
import {
  EyeOutline,
  SearchOutline,
  VolumeOutline,
} from '@fruits-chain/icons-react-native'

const bottomBarIconStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  // 无论大小图表都保持同一个占用空间
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

const BasicSwitch: React.FC = () => {
  const [value1, setValue1] = useState(bottomBar[1].value)

  return (
    <>
      <ScrollView>
        <Space head>
          <Text>默认样子、无底部安全边距、受控</Text>

          <TabBar
            safeAreaInsetBottom={false}
            options={bottomBar}
            value={value1}
            onChange={v => {
              setValue1(v as number)
            }}
          />

          <Button
            text="重置"
            danger
            onPress={() => {
              setValue1(bottomBar[1].value)
            }}
          />

          <Divider type="dark">.</Divider>

          <Text>指示器（与文案宽保持一致）、无底部安全边距、受控</Text>

          <TabBar
            indicator
            safeAreaInsetBottom={false}
            options={bottomBar}
            value={value1}
            onChange={v => {
              setValue1(v as number)
            }}
          />

          <Divider type="dark">.</Divider>

          <Text>指示器（固定20px宽）、无底部安全边距</Text>

          <TabBar
            indicator
            indicatorWidth={20}
            safeAreaInsetBottom={false}
            defaultValue={bottomBar2[1].value}
            options={bottomBar2}
          />

          <Divider type="dark">.</Divider>

          <Text>指示器（自适应选项占用空间）、无底部安全边距</Text>

          <TabBar
            indicator
            indicatorWidth={0}
            safeAreaInsetBottom={false}
            defaultValue={bottomBar2[1].value}
            options={bottomBar2}
          />

          <Divider type="dark">.</Divider>

          <Text>指示器（与文案宽保持一致）、无底部安全边距</Text>

          <TabBar indicator safeAreaInsetBottom={false} options={bottomBar2} />

          <Divider type="dark">.</Divider>

          <Text>
            指示器（与文案宽保持一致）、无底部安全边距、做对齐（数量少）
          </Text>

          <TabBar
            tabAlign="left"
            indicator
            safeAreaInsetBottom={false}
            options={bottomBar}
          />

          <Divider type="dark">.</Divider>

          <Text>
            指示器，label
            文字突出，有滚动条且居中，这种模式应该要单独搞一个组件，不适合混在一起
          </Text>

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

          <Divider type="dark">.</Divider>

          <Text>
            指示器（与文案宽保持一致）、无底部安全边距、做对齐（数量多出现滚动条）
          </Text>

          <TabBar
            tabAlign="left"
            indicator
            safeAreaInsetBottom={false}
            options={bottomBar3}
          />

          <Divider type="dark">.</Divider>

          <Text>
            指示器（自适应选项占用空间）、无底部安全边距、做对齐（数量多出现滚动条）
          </Text>

          <TabBar
            tabAlign="left"
            indicator
            indicatorWidth={0}
            safeAreaInsetBottom={false}
            options={bottomBar3}
          />

          <Divider type="dark">.</Divider>

          <Text>
            指示器（固定20px宽）、无底部安全边距、做对齐（数量多出现滚动条）
          </Text>

          <TabBar
            tabAlign="left"
            indicator
            indicatorWidth={20}
            safeAreaInsetBottom={false}
            options={bottomBar3}
          />
        </Space>
      </ScrollView>

      <TabBar options={bottomBar} defaultValue={bottomBar[0].value} />
    </>
  )
}

export default BasicSwitch
