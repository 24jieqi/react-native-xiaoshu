/**
 * title: 格式化展示
 * description: 通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。
 */

import React, { useState } from 'react'

import { Cell, NumberInput } from '@fruits-chain/react-native-xiaoshu'

const consoleNum = (n: number) => {
  console.log('[新数据]  ->  ', n)
}

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char)

  if (index === -1) {
    return value
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index)
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

function formatNumber(value: string, allowDot = true, allowMinus = true) {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g)
  } else {
    value = value.split('.')[0]
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g)
  } else {
    value = value.replace(/-/, '')
  }

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g

  return value.replace(regExp, '')
}

const formatterTo = (t: string, sign?: string) => {
  !sign && (sign = ',')
  var parts = (t || '').split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sign)
  return parts.join('.')
}

const parserNum = (n: string) => {
  if (n) {
    return +Number(formatNumber(n)).toFixed(2)
  }
  return null
}

const BasicNumberInputFormatter: React.FC = () => {
  const [value, setValue] = useState<number>(null)

  return (
    <Cell.Group title="格式化展示">
      <Cell
        title="受控:千分位 手动"
        value={
          <NumberInput
            placeholder="请输入"
            value={value}
            formatter={formatterTo}
            parser={parserNum}
            onChange={setValue}
          />
        }
      />

      <Cell
        title="formatter:千分位"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={1000}
            formatter={formatterTo}
            onChange={consoleNum}
          />
        }
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicNumberInputFormatter
