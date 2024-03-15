/**
 * title: 基础用法
 * description: 非受控、受控两种使用方式，简单的输入限制
 */

import React, { useState } from 'react'

import { Cell, NumberInput } from '@fruits-chain/react-native-xiaoshu'

const consoleNum = (n: number) => {
  console.log('[新数据]  ->  ', n)
}

const BasicNumberInputBase: React.FC = () => {
  const [value, setValue] = useState<number>(null)

  return (
    <Cell.Group title="基础用法">
      <Cell
        title="非受控"
        value={<NumberInput placeholder="请输入" onChange={consoleNum} />}
      />
      <Cell
        title="默认值"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={1000}
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="默认值:整数"
        value={
          <NumberInput
            type="digit"
            placeholder="请输入"
            defaultValue={1000}
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="默认值:正整数"
        value={
          <NumberInput
            type="digit"
            placeholder="请输入"
            min={0}
            onChange={consoleNum}
            keyboardType="number-pad"
          />
        }
      />

      <Cell
        title="受控"
        value={
          <NumberInput
            placeholder="请输入"
            value={value}
            onChange={n => {
              console.log('受控 value => ', n)
              setValue(n)
            }}
          />
        }
      />

      <Cell
        title="负数:立即响应"
        value={
          <NumberInput
            placeholder="请输入"
            formatter={t => {
              if (t) {
                return `-${t.replace(/-/, '')}`
              }
              return t
            }}
            limitDecimals={2}
            suffix="元"
            textAlign="right"
          />
        }
      />

      <Cell
        title="正数:立即响应"
        value={
          <NumberInput
            placeholder="请输入"
            formatter={t => t.replace(/-/, '')}
            limitDecimals={2}
            suffix="元"
            textAlign="right"
          />
        }
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicNumberInputBase
