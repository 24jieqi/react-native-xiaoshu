/**
 * title: 文案模式
 * description: 适用于单位切换，对输入控件进行补充、扩展。
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
        title="配合 Field.TextInput"
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
        title="配合 Field.TextInput"
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
        title="配合 TextInput"
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
        title="配合 Cell"
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
