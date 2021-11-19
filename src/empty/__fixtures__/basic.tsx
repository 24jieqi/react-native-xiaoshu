import React from 'react'
import { ScrollView } from 'react-native'

import { Empty, CellGroup, Icon } from 'react-native-xiaoshu'

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
        <Empty
          text="一二三"
          icon={<Icon.IconArrowOutline direction="down" />}
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicTag
