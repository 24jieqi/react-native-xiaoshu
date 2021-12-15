import React from 'react'
import { ScrollView, View } from 'react-native'

import { Empty, CellGroup, Icon } from '@fruits-chain/react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="基础用法" bordered={false}>
        <Empty />
      </CellGroup>

      <CellGroup title="自定义文案" bordered={false}>
        <Empty text="真的没有啦~" />
      </CellGroup>

      <CellGroup title="自定义图标" bordered={false}>
        <Empty text="一二三" icon={<Icon.ArrowDownOutline />} />
      </CellGroup>

      <View style={{ height: 400, backgroundColor: '#f5f5f5' }}>
        <Empty text="占满剩余空间 full" full />
      </View>
    </ScrollView>
  )
}

export default BasicTag
