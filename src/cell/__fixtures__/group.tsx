/**
 * title: 单元格组
 * description: Cell.Group 使用案例。
 */

import React from 'react'
import { Text, View } from 'react-native'

import { Cell, Toast, Space, Theme } from '@fruits-chain/react-native-xiaoshu'

const CellGroup: React.FC = () => {
  const { gray_1, gray_3 } = Theme.useThemeTokens()

  return (
    <Space>
      <Cell.Group
        title="分组标题"
        extra={<Text>extra</Text>}
        onPressTitle={() => {
          Toast('onPressTitle')
        }}
        onPressTitleText={() => {
          Toast('onPressTitleText')
        }}>
        <Cell title="标题" value="显示文案" />
        <Cell required title="必填" value="显示文案" />
        <Cell title="最后一项" value="一般不显示分割线" divider={false} />
      </Cell.Group>

      <View
        style={{
          backgroundColor: gray_1,
          paddingVertical: 24,
        }}>
        <Cell.Group
          title="内容区域有上下分割线"
          titleTextStyle={{ color: '#f30', backgroundColor: gray_3 }}
          bodyTopDivider
          bodyBottomDivider>
          <Cell title="标题" value="显示文案" />
          <Cell required title="必填" value="显示文案" />
          <Cell title="最后一项" value="一般不显示分割线" divider={false} />
        </Cell.Group>
      </View>
    </Space>
  )
}

export default CellGroup
