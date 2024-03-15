/**
 * title: 多选
 * description: 最简单的用法。
 */

import React, { useState } from 'react'
import { CoordOutline } from '@fruits-chain/icons-react-native'

import type { TreeOption } from '@fruits-chain/react-native-xiaoshu'
import { Card, Switch, Tree } from '@fruits-chain/react-native-xiaoshu'
import { Text } from 'react-native'

const options: TreeOption[] = new Array(7).fill(0).map((_, index0) => ({
  value: index0,
  switcherIconRotatable: false,
  renderSwitcherIcon: p => <CoordOutline {...p} />,
  label: `第一层选项_${index0}`,
  children: new Array(3).fill(0).map((_, index1) => ({
    value: index1 + (index0 + 1) * 10,
    label: `第二层选项_${index0}_${index1}`,
    children: new Array(4).fill(0).map((_, index2) => ({
      value: index2 + (index0 + 1) * 100 + (index1 + 1) * 10,
      label: `第三层选项_${index0}_${index1}_${index2}`,
      children: new Array(4).fill(0).map((_, index3) => ({
        value:
          index3 + (index0 + 1) * 1000 + (index1 + 1) * 100 + (index2 + 1) * 10,
        label: `第四层选项_${index0}_${index1}_${index2}_${index3}`,
      })),
    })),
  })),
}))

const defaultValue = [11]

const onChange = (...rest: any[]) => {
  console.log(rest[0])
  console.log(rest[1])
}

const TreeMultiple: React.FC = () => {
  const [editable, setEditable] = useState(true)

  return (
    <Card
      title="多选"
      bodyPadding={false}
      bodyStyle={{ height: 400 }}
      extra={
        <>
          <Text>可编辑/点击</Text>
          <Switch value={editable} onChange={setEditable} />
        </>
      }>
      <Tree
        editable={editable}
        options={options}
        defaultValue={defaultValue}
        multiple
        onChange={onChange}
        search
      />
    </Card>
  )
}

export default TreeMultiple
