/**
 * title: 单选
 * desc: 最简单的用法。
 */

import React from 'react'
import { View, Text } from 'react-native'
import {
  CoordOutline,
  TimeCircleOutline,
} from '@fruits-chain/icons-react-native'

import type { TreeOption } from '@fruits-chain/react-native-xiaoshu'
import { Card, Tree } from '@fruits-chain/react-native-xiaoshu'

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
        render: ({ label, active, activeColor, labelHighlight }) => (
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <TimeCircleOutline
              size={10}
              color={active || labelHighlight ? activeColor : '#333'}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: 4,
                color: active || labelHighlight ? activeColor : '#333',
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
  return (
    <Card title="基本" bodyPadding={false}>
      <View
        style={{
          height: 400,
        }}>
        <Tree
          options={options}
          defaultValue={11}
          defaultExpandedValues={defaultExpandedValues}
          onChange={onChange}
          search
          placeholder="请输入关键词"
        />
      </View>
    </Card>
  )
}

export default TreeBase
