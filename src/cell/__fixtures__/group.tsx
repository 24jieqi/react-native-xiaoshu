/**
 * title: 单元格组
 * desc: CellGroup 使用案例
 */

import React from 'react'
import { Text, View } from 'react-native'

import { Cell, CellGroup, Toast } from '@fruits-chain/react-native-xiaoshu'

const CellGroups: React.FC = () => {
  return (
    <>
      <CellGroup
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
        <Cell title="最后一项" value="一般不显示分割线" bordered={false} />
      </CellGroup>

      <View
        style={{ backgroundColor: '#fff', paddingVertical: 24, marginTop: 12 }}>
        <CellGroup
          title="内容区域有上下分割线"
          titleTextStyle={{ color: '#f30', backgroundColor: '#666' }}
          bordered>
          <Cell title="标题" value="显示文案" />
          <Cell required title="必填" value="显示文案" />
          <Cell title="最后一项" value="一般不显示分割线" bordered={false} />
        </CellGroup>
      </View>
    </>
  )
}

export default CellGroups
