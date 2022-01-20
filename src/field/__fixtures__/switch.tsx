import React, { useState } from 'react'
import { CellGroup, Field } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldText: React.FC = () => {
  const [value, setValue] = useState(true)

  return (
    <CellGroup title="Field Text">
      <Field.Switch
        title="默认数据"
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="默认数据:默认值"
        defaultValue
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="自定义选中值、未选中值"
        activeValue="1"
        inactiveValue="2"
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="自定义选中值、未选中值:默认值"
        activeValue="1"
        inactiveValue="2"
        defaultValue="1"
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="受控:无onChange"
        value={value}
        onChange={v => {
          console.log(v)
        }}
        bordered={false}
      />

      <Field.Switch
        title="受控:有onChange"
        value={value}
        onChange={setValue}
        bordered={false}
      />
    </CellGroup>
  )
}

export default BasicFieldText
