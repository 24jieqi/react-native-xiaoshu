/**
 * title: 基础用法
 * desc: 单独使用 Cell。
 */

import React from 'react'

import { Cell, Toast } from '@fruits-chain/react-native-xiaoshu'

const CellBase: React.FC = () => {
  return (
    <>
      <Cell title="标题" value="显示文案" />
      <Cell required title="必填" value="显示文案" />
      <Cell title="仅有标题" />
      <Cell title="仅有文案" />
      <Cell title="右侧有箭头，一般表示可以点击" isLink />
      <Cell
        title="右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击"
        isLink
      />
      <Cell
        titleTextNumberOfLines={1}
        title="右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击"
        isLink
      />
      <Cell
        title="点击事件"
        isLink
        onPress={() => {
          Toast('点击整个单元格')
        }}
      />
      <Cell
        title="点击箭头事件"
        isLink
        onPressLink={() => {
          Toast('点击箭头')
        }}
      />
      <Cell title="标题" value={`多行文本\n多行文本`} />
      <Cell title="最后一项" value="一般不显示分割线" divider={false} />
    </>
  )
}

export default CellBase
