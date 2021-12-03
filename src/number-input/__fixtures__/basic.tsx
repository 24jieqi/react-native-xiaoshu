import React, { useState } from 'react'

import { Cell, CellGroup, NumberInput } from 'react-native-xiaoshu'

const formatterTo = (t: string, sign?: string) => {
  !sign && (sign = ',')
  var parts = t.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sign)
  return parts.join('.')
}

const consoleNum = (n: number) => {
  console.log('新数据  ->  ', n)
}

const BasicNumberInput: React.FC = () => {
  const [value, setValue] = useState<number>(null)

  return (
    <CellGroup title="基础用法">
      <Cell
        title="默认值"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={1000}
            onChangeNumber={consoleNum}
          />
        }
      />

      <Cell
        title="受控"
        value={
          <NumberInput
            placeholder="请输入"
            value={value}
            onChangeNumber={n => {
              console.log(n)
              setValue(n)
            }}
          />
        }
      />

      <Cell
        title="格式化:千分位"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={1000}
            formatter={formatterTo}
            onChangeNumber={consoleNum}
          />
        }
      />

      <Cell
        title="格式化:两位小数"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={1000}
            parser={n => {
              if (n) {
                return +Number(n).toFixed(2)
              }
              return null
            }}
            onChangeNumber={consoleNum}
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
            onChangeNumber={consoleNum}
          />
        }
      />

      <Cell
        title="其他和 TextInput 一样"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={10}
            max={1000.12}
            onChangeNumber={consoleNum}
            bordered
          />
        }
      />

      <Cell
        title="运渣费"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={10}
            max={10000}
            formatter={formatterTo}
            bordered
            addonAfter="元"
            textAlign="right"
          />
        }
      />

      <Cell
        title="运渣费"
        value={
          <NumberInput
            placeholder="请输入"
            defaultValue={10}
            max={10000}
            formatter={formatterTo}
            suffix="元"
            textAlign="right"
          />
        }
      />
    </CellGroup>
  )
}

export default BasicNumberInput
