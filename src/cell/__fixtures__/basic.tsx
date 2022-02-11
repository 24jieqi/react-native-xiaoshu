import React from 'react'
import { ScrollView } from 'react-native'

import { Cell } from '@fruits-chain/react-native-xiaoshu'
import CellBase from './base'
import CellDivider from './divider'
import CellLayout from './layout'
import CellExtra from './extra'
import CellGroup from './group'

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <Cell.Group title="基础用法">
        <CellBase />
      </Cell.Group>

      <Cell.Group title="分割线">
        <CellDivider />
      </Cell.Group>

      <Cell.Group title="排版布局">
        <CellLayout />
      </Cell.Group>

      <Cell.Group title="扩展单元格">
        <CellExtra />
      </Cell.Group>

      <CellGroup />
    </ScrollView>
  )
}

export default BasicCell
