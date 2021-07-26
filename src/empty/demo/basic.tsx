import React from 'react'
import { ScrollView } from 'react-native'

import { Empty, CellGroup } from 'react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法" border={false}>
        <Empty />
      </CellGroup>

      <CellGroup title="自定义文案" border={false}>
        <Empty text="真的没有啦~" />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicTag
