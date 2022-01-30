/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import type { DatePickerColumnMode } from '@fruits-chain/react-native-xiaoshu'
import { DatePickerView, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const Y_M_LIMIT = {
  min: new Date(2016, 6, 20, 18, 40, 10),
  max: new Date(2026, 2, 10, 12, 20, 50),
}

console.log('Y_M_LIMIT.min    =>   ', Y_M_LIMIT.min)
console.log('Y_M_LIMIT.max    =>   ', Y_M_LIMIT.max)

// 控件多了容易卡顿
const modes: DatePickerColumnMode[] = [
  // 'Y',
  // 'Y-M',
  // 'Y-D',
  // 'Y-h',
  'Y-m',
  // 'Y-s',
  // 'M',
  // 'M-D',
  // 'M-h',
  // 'M-m',
  // 'M-s',
  // 'D',
  // 'D-h',
  // 'D-m',
  // 'D-s',
  // 'h',
  // 'h-m',
  // 'h-s',
  // 'm',
  // 'm-s',
  // 's',
]

const BasicDatePickerView: React.FC = () => {
  const [value, setValue] = useState(new Date())

  return (
    <ScrollView>
      {modes.map(mode => {
        return (
          <React.Fragment key={mode}>
            <CellGroup title={`${mode}:非受控`}>
              <DatePickerView mode={mode} />
            </CellGroup>
            <CellGroup title={`${mode}:最大最小值:非受控`}>
              <DatePickerView
                mode={mode}
                min={Y_M_LIMIT.min}
                max={Y_M_LIMIT.max}
              />
            </CellGroup>
            <CellGroup title={`${mode}:受控`}>
              <DatePickerView mode={mode} value={value} onChange={setValue} />
            </CellGroup>
            <CellGroup title={`${mode}:最大最小值:受控`}>
              <DatePickerView
                mode={mode}
                min={Y_M_LIMIT.min}
                max={Y_M_LIMIT.max}
                value={value}
                onChange={setValue}
              />
            </CellGroup>
            <CellGroup title={`${mode}:受控不更新`}>
              <DatePickerView mode={mode} value={value} />
            </CellGroup>
          </React.Fragment>
        )
      })}
    </ScrollView>
  )
}

export default BasicDatePickerView
