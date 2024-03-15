/**
 * title: 基础用法
 * description: 单独使用 Cell。
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
      <Cell title="仅有标题，右侧有箭头，一般表示可以点击" isLink />
      <Cell
        title="标题有多行：右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击"
        isLink
      />
      <Cell
        titleTextNumberOfLines={1}
        title="标题只有一行：右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击右侧有箭头，一般表示可以点击"
        isLink
      />
      <Cell
        title="onPress 点击事件"
        isLink
        onPress={() => {
          Toast('点击整个单元格')
        }}
      />
      <Cell
        title="onPressLink 点击箭头事件"
        isLink
        onPressLink={() => {
          Toast('点击箭头')
        }}
      />
      <Cell title="标题" extra="这里的有一个可以扩展说明的文案" />
      <Cell
        title="标题"
        value="7个"
        extra="这里的有一个可以扩展说明的文案，这里的有一个可以扩展说明的文案"
        onPress={() => {
          Toast('点击整个单元格')
        }}
        isLink
      />
      <Cell title="标题" extra={`这里的有一个可以扩展\n说明的文案`} />
      <Cell title="标题" value={`多行文本\n多行文本`} />
      <Cell title="最后一项" value="一般不显示分割线" divider={false} />
    </>
  )
}

export default CellBase
