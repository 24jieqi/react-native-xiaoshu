/**
 * title: 分割线
 * description: Cell 支持自定义分割线左右边距。
 */

import React from 'react'

import { Cell } from '@fruits-chain/react-native-xiaoshu'

const CellDivider: React.FC = () => {
  return (
    <>
      <Cell.Group title="默认，左右保留边距">
        <Cell title="标题" />
        <Cell title="标题" />
        <Cell title="标题" />
        <Cell title="标题" divider={false} />
      </Cell.Group>

      <Cell.Group title="左侧无边距，右侧保留边距">
        <Cell title="标题" value="左侧无" dividerLeftGap={0} />
        <Cell title="标题" value="左侧无" dividerLeftGap={0} />
        <Cell title="标题" value="左侧无" dividerLeftGap={0} divider={false} />
      </Cell.Group>

      <Cell.Group title="右侧无边距，左侧保留边距">
        <Cell title="标题" value="右侧无" dividerRightGap={0} />
        <Cell title="标题" value="右侧无" dividerRightGap={0} />
        <Cell title="标题" value="右侧无" dividerRightGap={0} />
        <Cell title="标题" value="右侧无" dividerRightGap={0} divider={false} />
      </Cell.Group>

      <Cell.Group title="左右自定义边距">
        <Cell
          title="标题"
          value="左右皆无"
          dividerLeftGap={0}
          dividerRightGap={0}
        />
        <Cell
          title="标题"
          value="左24右0"
          dividerLeftGap={24}
          dividerRightGap={0}
        />
        <Cell
          title="标题"
          value="左0右24"
          dividerLeftGap={0}
          dividerRightGap={24}
        />
        <Cell title="标题" value="不显示分割线" divider={false} />
      </Cell.Group>
    </>
  )
}

export default CellDivider
