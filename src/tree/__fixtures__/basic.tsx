import React, { useState } from 'react'

import { Blank, TabBar, Flex } from '@fruits-chain/react-native-xiaoshu'

import TreeBase from './base'
import TreeMultiple from './multiple'
import TreeMultipleIndependent from './multiple-independent'

const bottomBar = [
  {
    value: 0,
    label: '基础',
    C: TreeBase,
  },
  {
    value: 1,
    label: '多选',
    C: TreeMultiple,
  },
  {
    value: 2,
    label: '多选(独立)',
    C: TreeMultipleIndependent,
  },
]

const BasicTree: React.FC = () => {
  const [value, setValue] = useState(bottomBar[0].value)
  const { C } = bottomBar[value]

  return (
    <>
      <Flex.Item flex={1}>
        <Blank top bottom>
          <C />
        </Blank>
      </Flex.Item>
      <TabBar
        options={bottomBar}
        value={value}
        onChange={setValue as (v: number) => void}
      />
    </>
  )
}

export default BasicTree
