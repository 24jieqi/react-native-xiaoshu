/**
 * title: 选项按钮
 * description: 适合单选、多选场景。
 */

import React from 'react'
import { Cell, Field } from '@fruits-chain/react-native-xiaoshu'

const options = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: `选项_${index}`,
}))

const options2 = new Array(8).fill(0).map((_, index) => ({
  value: index,
  label: `选项_${index}`,
}))

const BasicFieldButtonOption: React.FC = () => {
  return (
    <Cell.Group title="Field Button Option">
      <Field.ButtonOption
        title="标题:单选"
        options={options}
        deselect={false}
      />
      <Field.ButtonOption
        title="标题:单选:outline"
        type="outline"
        options={options}
      />
      <Field.ButtonOption title="标题:单选" options={options2} vertical />
      <Field.ButtonOption title="标题:多选" options={options} multiple />
      <Field.ButtonOption
        title="标题:多选:outline"
        type="outline"
        options={options}
        multiple
      />
      <Field.ButtonOption
        title="标题:多选"
        options={options2}
        vertical
        multiple
      />
    </Cell.Group>
  )
}

export default BasicFieldButtonOption
