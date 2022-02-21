/**
 * title: 单选多选
 * desc: 单选多选。
 */

import React, { useState } from 'react'
import { Cell, Field } from '@fruits-chain/react-native-xiaoshu'

const options = [
  {
    value: 1,
    label: '选项一',
  },
  {
    value: 2,
    label: '选项二',
  },
  {
    value: 3,
    label: '选项三',
  },
]

const BasicFieldCheckbox: React.FC = () => {
  const [value, setValue] = useState(options[1].value)
  const [value2, setValue2] = useState([options[1].value])

  return (
    <Cell.Group title="Field Checkbox">
      <Field.Checkbox title="单选:非受控" options={options} />
      <Field.Checkbox
        title="单选:禁用"
        options={options}
        value={value}
        editable={false}
      />
      <Field.Checkbox title="单选:受控不更新" options={options} value={value} />
      <Field.Checkbox
        title="单选:受控"
        options={options}
        value={value}
        onChange={(v, option) => {
          setValue(v as number)
          console.log(option)
        }}
      />
      <Field.Checkbox title="多选:非受控" multiple options={options} />
      <Field.Checkbox
        title="多选:非受控"
        multiple
        options={options}
        value={value2}
        editable={false}
      />
      <Field.Checkbox
        title="多选:受控不更新"
        multiple
        options={options}
        value={value2}
      />
      <Field.Checkbox
        title="多选:受控"
        multiple
        options={options}
        value={value2}
        onChange={(v, option) => {
          setValue2(v as number[])
          console.log(option)
        }}
      />
    </Cell.Group>
  )
}

export default BasicFieldCheckbox
