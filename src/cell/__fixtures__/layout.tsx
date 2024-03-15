/**
 * title: 排版布局
 * description: Cell 支持右侧文案左右、居中对齐，标题与内容上下布局。
 */

import React from 'react'

import { Cell } from '@fruits-chain/react-native-xiaoshu'

const CellLayout: React.FC = () => {
  return (
    <>
      <Cell title="标题" value="文案左对齐" textAlign="left" />
      <Cell title="标题" value="文案居中齐" textAlign="center" />
      <Cell title="标题" value="文案右对齐" />
      <Cell title="标题" value="上下布局" vertical />
      <Cell
        title="标题"
        value="上下布局不能修改文案对齐方式"
        vertical
        textAlign="right"
        isLink
      />
      <Cell title="标题" value={`多行文本\n多行文本`} center />
      <Cell title="标题" value={`多行文本\n多行文本`} center isLink />
      <Cell title="最后一项" value="一般不显示分割线" divider={false} />
    </>
  )
}

export default CellLayout
