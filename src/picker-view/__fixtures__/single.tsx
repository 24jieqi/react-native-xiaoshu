import React, { useState } from 'react'

import { PickerView, Cell } from '@fruits-chain/react-native-xiaoshu'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}))

const PickerViewSingle: React.FC = () => {
  const [value, setValue] = useState<(string | number)[]>([columns1[1].value])

  return (
    <>
      <Cell.Group title="单列选择:受控">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('单列选择:受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
            setValue(v)
          }}
          value={value}
        />
      </Cell.Group>

      <Cell.Group title="单列选择:受控不更新">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('单列选择:受控不更新')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
          value={value}
        />
      </Cell.Group>

      <Cell.Group title="单列选择:非受控">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('单列选择:非受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="单列选择:非受控默认值">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('单列选择:非受控默认值')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
          defaultValue={[columns1[5].value]}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewSingle
