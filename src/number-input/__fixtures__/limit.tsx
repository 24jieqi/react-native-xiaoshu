/**
 * title: 输入限制
 * description: 最小、最小值，小数位控制
 */

import React from 'react'

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

const parserNum = (n: string) => {
  if (n) {
    return +Number(formatNumber(n)).toFixed(2)
  }
  return null
}

const BasicNumberInputLimit: React.FC = () => {
  return (
    <Cell.Group title="输入限制">
      <Cell
        title="默认值:4位小数限制"
        value={
          <NumberInput
            type="number"
            placeholder="请输入"
            limitDecimals={4}
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="parser:四色五入"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={1000}
            parser={parserNum}
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="parser:小于100*2"
        value={
          <NumberInput
            placeholder="请输入"
            parser={v => {
              const vn = Number(v)
              if (vn < 100) {
                return vn * 2
              }
              return vn
            }}
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="格式化:最大最小"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={10}
            max={1000.12}
            min={1.14}
            parser={n => {
              if (n) {
                return +Number(n).toFixed(2)
              }
              return null
            }}
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="限制的触发时机(可能无法正常输入)"
        value={
          <NumberInput
            placeholder="请输入"
            max={1000.12}
            min={1.001}
            validateTrigger="onChangeText"
            onChange={consoleNum}
          />
        }
      />
      <Cell
        title="最小值是0"
        value={
          <NumberInput placeholder="请输入" min={0} onChange={consoleNum} />
        }
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicNumberInputLimit
