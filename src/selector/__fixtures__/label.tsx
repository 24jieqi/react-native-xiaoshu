/**
 * title: 文案模式
 * desc: 适用于单位切换
 */

import React, { useState } from 'react'

import type { SelectorOption } from '@fruits-chain/react-native-xiaoshu'
import { Cell, Selector, Field } from '@fruits-chain/react-native-xiaoshu'

const units: SelectorOption[] = [
  {
    value: 1,
    label: '元/kg',
  },
  {
    value: 2,
    label: '元/件',
  },
]

const BasicSelectorLabel: React.FC = () => {
  const [unitValue, setUnitValue] = useState<number | string>(units[0].value)

  return (
    <Cell.Group title="文案">
      <Field.TextInput
        title="在 Field.TextInput 中使用"
        defaultValue="100"
        valueExtra={
          <Selector.Text
            value={unitValue}
            options={units}
            onChange={setUnitValue}
          />
        }
      />
      <Field.TextInput
        title="在 Field.TextInput 中使用"
        defaultValue="100"
        textInputBordered
        valueExtra={
          <Selector.Text
            value={unitValue}
            options={units}
            onChange={setUnitValue}
            divider={false}
          />
        }
      />
      <Field.TextInput
        title="在输入框中使用"
        defaultValue="100"
        textInputBordered
        addonAfter={
          <Selector.Text
            value={unitValue}
            options={units}
            onChange={setUnitValue}
            divider={false}
          />
        }
      />
      <Cell
        title="在单元格中使用"
        center
        value={
          <Selector.Text
            value={unitValue}
            options={units}
            onChange={setUnitValue}
            arrowDirection="down"
            divider={false}
            title="单位切换"
            head={false}
          />
        }
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicSelectorLabel
