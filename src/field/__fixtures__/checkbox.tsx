/**
 * title: 单选多选
 * description: 单选多选。
 */

import React, { useState } from 'react'
import { Cell, Field } from '@fruits-chain/react-native-xiaoshu'

const options = new Array(2).fill(0).map((_, index) => ({
  value: index,
  label: `选项_${index}`,
}))

const options2 = new Array(9).fill(0).map((_, index) => ({
  value: index,
  label: `选项_${index}`,
}))

const BasicFieldCheckbox: React.FC = () => {
  const [value, setValue] = useState(options[1].value)
  const [value2, setValue2] = useState([options[1].value])

  return (
    <Cell.Group title="Field Checkbox">
      <Field.Checkbox
        title="单选:非受控"
        options={options}
        activeColor="#098"
        checkboxIconLabelGap={16}
        checkboxLabelTextStyle={{
          color: '#666',
        }}
        iconSize={12}
      />
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
      <Field.Checkbox
        title="单选:不可取消已选择"
        options={options}
        value={value}
        onChange={(v, option) => {
          setValue(v as number)
          console.log(option)
        }}
        deselect={false}
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
      <Field.Checkbox
        title="多选:受控"
        multiple
        vertical
        options={options}
        value={value2}
        onChange={(v, option) => {
          setValue2(v as number[])
          console.log(option)
        }}
      />

      <Field.Checkbox
        title="多选:非受控"
        multiple
        vertical
        options={options2}
      />
    </Cell.Group>
  )
}

export default BasicFieldCheckbox
