/**
 * title: 单选
 * description: 最简单的用法。
 */

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {
  CoordOutline,
  TimeCircleOutline,
} from '@fruits-chain/icons-react-native'

import type { TreeOption } from '@fruits-chain/react-native-xiaoshu'
import { Card, Switch, Tree } from '@fruits-chain/react-native-xiaoshu'

const options: TreeOption[] = new Array(7).fill(0).map((_, index0) => ({
  value: index0,
  switcherIconRotatable: false,
  renderSwitcherIcon: p => <CoordOutline size={p.size} color="#333" />,
  switcherHighlight: false,
  bold: true,
  label: `第一A_${index0}层a选项`,
  children: new Array(3).fill(0).map((_, index1) => ({
    value: index1 + (index0 + 1) * 10,
    label: `第二Ab层选项_${index0}_${index1}`,
    children: new Array(4).fill(0).map((_, index2) => ({
      value: index2 + (index0 + 1) * 100 + (index1 + 1) * 10,
      label: `第三层选项_${index0}_${index1}_${index2}`,
      disabled: index0 === 1,
      children: new Array(4).fill(0).map((_, index3) => ({
        value:
          index3 + (index0 + 1) * 1000 + (index1 + 1) * 100 + (index2 + 1) * 10,
        label: `第四层选项_${index0}_${index1}_${index2}_${index3}`,
        render: ({ label, activeColor, labelHighlight }) => (
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <TimeCircleOutline
              size={10}
              color={labelHighlight ? activeColor : '#333'}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: 4,
                color: labelHighlight ? activeColor : '#333',
              }}>
              {label}
            </Text>
          </View>
        ),
      })),
    })),
  })),
}))

const defaultExpandedValues = [0, 210, 112]

const onChange = (...rest: any[]) => {
  console.log(rest[0])
  console.log(rest[1])
}

const TreeBase: React.FC = () => {
  const [editable, setEditable] = useState(true)

  return (
    <Card
      title="基本"
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
        defaultValue={11}
        defaultExpandedValues={defaultExpandedValues}
        onChange={onChange}
        search
        placeholder="请输入关键词"
      />
    </Card>
  )
}

export default TreeBase
