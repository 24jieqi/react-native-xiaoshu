import React, { useState } from 'react'
import { CellGroup, Field } from '@fruits-chain/react-native-xiaoshu'

const options = new Array(6).fill(0).map((_, index) => ({
  value: index,
  label: `选项 ${index}`,
}))

const BasicFieldSelector: React.FC = () => {
  const [s1, setS1] = useState(undefined as number)
  const [s2, setS2] = useState([] as number[])

  return (
    <CellGroup title="Field Selector">
      <Field.Selector
        title="单选"
        placeholder="请选择"
        value={s1}
        options={options}
        onChange={v => {
          setS1(v as number)
        }}
      />
      <Field.Selector
        multiple
        title="多选"
        placeholder="请选择"
        value={s2}
        options={options}
        onChange={v => {
          setS2(v as number[])
        }}
        bordered={false}
      />
    </CellGroup>
  )
}

export default BasicFieldSelector
