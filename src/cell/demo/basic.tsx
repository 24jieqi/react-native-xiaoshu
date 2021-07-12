import React from 'react'
import { Text, ScrollView } from 'react-native'

import { Cell, CellGroup, Icon } from 'react-native-xiaoshu'

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法">
        <Cell
          titleStyle={{ justifyContent: 'center' }}
          title={<Text style={{ color: '#f30' }}>单元格</Text>}
          value="内容"
        />

        <Cell title="单元格" value="内容" />

        <Cell required title="单元格" />

        <Cell
          title="单元格"
          value="内容"
          onPress={() => {
            console.log('?0.0')
          }}
        />

        <Cell
          title="单元格"
          value="内容"
          onPress={() => {
            console.log('!0.0')
          }}
          border={false}
        />
      </CellGroup>

      <CellGroup title="单元格大小">
        <Cell title="单元格" value="内容" />

        <Cell
          required
          title="单元格"
          value="large"
          size="large"
          border={false}
        />
      </CellGroup>

      <CellGroup title="垂直布局">
        <Cell vertical title="单元格" value="内容" />

        <Cell
          required
          vertical
          title="单元格"
          value="large"
          size="large"
          border={false}
        />
      </CellGroup>

      <CellGroup title="展示图标">
        <Cell
          title="单元格"
          value="内容"
          icon={<Icon.IconArrowOutline size="14" />}
          border={false}
        />
      </CellGroup>

      <CellGroup title="只设置 value">
        <Cell value="内容" border={false} />
      </CellGroup>

      <CellGroup title="展示箭头">
        <Cell
          title="单元格"
          value="内容"
          isLink
          onPress={() => {
            console.log('单元格')
          }}
        />

        <Cell title="单元格" value="内容" isLink arrowDirection="left" />

        <Cell title="单元格" value="内容" isLink arrowDirection="up" />

        <Cell title="单元格" value="内容" isLink arrowDirection="down" />

        <Cell
          title="单元格"
          value="内容"
          rightIcon={<Icon.IconArrowOutline />}
          border={false}
        />
      </CellGroup>

      <CellGroup title="垂直居中">
        <Cell
          title="单元格"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
          isLink
          center
        />
        <Cell
          title="单元格"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
          isLink
        />
      </CellGroup>

      <CellGroup title="分组头">
        <Cell title="单元格" value="内容" isLink />

        <Cell title="单元格" value="内容" border={false} isLink />
      </CellGroup>

      <CellGroup title={<Text style={{ color: '#690' }}>分组头</Text>}>
        <Cell title="单元格" value="内容" isLink />

        <Cell title="单元格" value="内容" border={false} isLink />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicCell
