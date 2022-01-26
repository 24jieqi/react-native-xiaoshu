/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, View } from 'react-native'

import { Empty, CellGroup, Icon } from '@fruits-chain/react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="基础用法">
        <Empty />
      </CellGroup>

      <CellGroup title="自定义文案">
        <Empty text="真的没有啦~" />
      </CellGroup>

      <CellGroup title="自定义图标">
        <Empty text="一二三" icon={<Icon.ArrowDownOutline />} />
      </CellGroup>

      <View style={{ height: 500, backgroundColor: '#f5f5f5' }}>
        <Empty text="占满剩余空间 full" full />
      </View>
    </ScrollView>
  )
}

export default BasicTag
