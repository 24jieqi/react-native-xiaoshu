/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View } from 'react-native'

import { NavTab, Cell, Theme } from '@fruits-chain/react-native-xiaoshu'

const options = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: `选项选项${index}`,
}))

const BasicNavBar: React.FC = () => {
  const { gray_1 } = Theme.useThemeTokens()
  const [value, onChange] = useState(options[1].value)
  return (
    <View style={{ backgroundColor: gray_1, paddingVertical: 20 }}>
      <Cell.Group title="一般使用">
        <NavTab options={options} defaultValue={options[2].value} />
      </Cell.Group>
      <Cell.Group title="受控模式">
        <NavTab options={options} value={value} onChange={onChange} />
      </Cell.Group>
    </View>
  )
}

export default BasicNavBar
