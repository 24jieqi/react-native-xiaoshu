import React from 'react'
import { ScrollView } from 'react-native'

import { CellGroup } from '@fruits-chain/react-native-xiaoshu'
import CellBase from './base'
import CellDivider from './divider'
import CellLayout from './layout'
import CellExtra from './extra'
import CellGroups from './group'

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法">
        <CellBase />
      </CellGroup>

      <CellGroup title="分割线">
        <CellDivider />
      </CellGroup>

      <CellGroup title="排版布局">
        <CellLayout />
      </CellGroup>

      <CellGroup title="扩展单元格">
        <CellExtra />
      </CellGroup>

      <CellGroups />
    </ScrollView>
  )
}

export default BasicCell
