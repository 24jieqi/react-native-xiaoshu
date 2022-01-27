import React, { useState } from 'react'

import type { PickerOptionCascade } from '@fruits-chain/react-native-xiaoshu'
import { PickerView, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const buildChildren = (
  num: number,
  valuePrefix: string,
  labelPrefix: string,
  insertChildren?: (value: string, label: string) => PickerOptionCascade[],
  // eslint-disable-next-line max-params
) => {
  return new Array(num).fill(0).map((_, index) => ({
    label: `${labelPrefix}_${index}`,
    value: `${valuePrefix}_${index}`,
    children: insertChildren
      ? insertChildren(`${valuePrefix}_${index}`, `${labelPrefix}_${index}`)
      : null,
  }))
}

const columns4 = buildChildren(8, 'sj', '省级', (sjValue, sjLabel) =>
  buildChildren(
    6,
    sjValue.replace('sj', 'sq'),
    sjLabel.replace('省级', '市区'),
    (sqValue, sqLabel) =>
      buildChildren(
        4,
        sqValue.replace('sq', 'qx'),
        sqLabel.replace('市区', '区县'),
      ),
  ),
)

const defaultValue = ['sj_5', 'sq_5_2', 'qx_5_2_2']

const PickerViewCascade: React.FC = () => {
  const [value, setValue] = useState<(string | number)[]>([])

  return (
    <>
      <CellGroup title="级联选择:非受控" bodyPaddingHorizontal>
        <PickerView
          columns={columns4}
          onChange={(v, o) => {
            console.log('级联选择:非受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
          defaultValue={defaultValue}
        />
      </CellGroup>

      <CellGroup title="级联选择:受控" bodyPaddingHorizontal>
        <PickerView
          columns={columns4}
          value={value}
          onChange={(v, o) => {
            console.log('级联选择:受控')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
            setValue(v)
          }}
        />
      </CellGroup>

      <CellGroup title="级联选择:受控不更新" bodyPaddingHorizontal>
        <PickerView
          columns={columns4}
          value={value}
          onChange={(v, o) => {
            console.log('级联选择:受控不更新')
            console.log('滑动完成就触发 -> values:', v)
            console.log('滑动完成就触发 -> options:', o)
          }}
        />
      </CellGroup>
    </>
  )
}

export default PickerViewCascade
