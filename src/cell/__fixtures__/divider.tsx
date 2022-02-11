/**
 * title: 分割线
 * desc: Cell 支持自定义分割线左右边距
 */

import React from 'react'

import { Cell } from '@fruits-chain/react-native-xiaoshu'

const CellDivider: React.FC = () => {
  return (
    <>
      <Cell title="默认" />
      <Cell title="标题" value="左侧无" dividerLeftGap={0} />
      <Cell title="标题" value="左侧无" dividerLeftGap={0} />
      <Cell title="标题" value="左侧无" dividerLeftGap={0} />
      <Cell title="标题" value="右侧无" dividerRightGap={0} />
      <Cell title="标题" value="右侧无" dividerRightGap={0} />
      <Cell title="标题" value="右侧无" dividerRightGap={0} />
      <Cell title="标题" value="右侧无" dividerRightGap={0} />
      <Cell
        title="标题"
        value="右右皆无"
        dividerLeftGap={0}
        dividerRightGap={0}
      />
      <Cell
        title="标题"
        value="右右皆无"
        dividerLeftGap={0}
        dividerRightGap={0}
      />
      <Cell
        title="标题"
        value="右右皆无"
        dividerLeftGap={0}
        dividerRightGap={0}
      />
      <Cell
        title="标题"
        value="右右皆无"
        dividerLeftGap={0}
        dividerRightGap={0}
      />
      <Cell title="最后一项" value="一般不显示分割线" divider={false} />
    </>
  )
}

export default CellDivider
