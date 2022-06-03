import React, { useState } from 'react'
import { PickerView, Cell } from '@fruits-chain/react-native-xiaoshu'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}))

const columns2 = [columns1, columns1, columns1, columns1]

const columns3 = [
  {
    options: columns1,
    defaultValue: '4',
  },
  {
    options: columns1,
    defaultValue: '2',
  },
  {
    options: columns1,
    defaultValue: '9',
  },
]

const defaultValue = [columns2[0][5].value, columns2[1][3].value]

const PickerViewMultiple: React.FC = () => {
  const [value1, setValue1] = useState<(string | number)[]>([
    columns2[0][3].value,
    columns2[1][2].value,
  ])
  const [value2, setValue2] = useState<(string | number)[]>([])

  return (
    <>
      <Cell.Group title="多列选择:受控">
        <PickerView
          columns={columns2}
          value={value1}
          onChange={(v, o) => {
            console.log('多列选择:受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
            setValue1(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="多列选择:受控不更新">
        <PickerView
          columns={columns2}
          value={value1}
          onChange={(v, o) => {
            console.log('多列选择:受控不更新')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="多列选择:非受控默认值">
        <PickerView
          columns={columns2}
          defaultValue={defaultValue}
          onChange={(v, o) => {
            console.log('多列选择:非受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="多列带默认值:非受控">
        <PickerView
          columns={columns3}
          onChange={(v, o) => {
            console.log('多列带默认值:非受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="多列带默认值:非受控>>>">
        <PickerView
          columns={columns3}
          defaultValue={defaultValue}
          onChange={(v, o) => {
            console.log('多列带默认值:非受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="多列带默认值:受控">
        <PickerView
          columns={columns3}
          value={value2}
          onChange={(v, o) => {
            console.log('多列带默认值:受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
            setValue2(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="多列带默认值:受控不更新">
        <PickerView
          columns={columns3}
          value={value2}
          onChange={(v, o) => {
            console.log('多列带默认值:受控不更新')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewMultiple
