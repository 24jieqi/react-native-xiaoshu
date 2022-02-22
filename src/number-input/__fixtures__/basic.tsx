/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Cell, NumberInput, helpers } from '@fruits-chain/react-native-xiaoshu'

const formatterTo = (t: string, sign?: string) => {
  !sign && (sign = ',')
  var parts = (t || '').split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sign)
  return parts.join('.')
}

const consoleNum = (n: number) => {
  console.log('[新数据]  ->  ', n)
}

const parserNum = (n: string) => {
  if (n) {
    return +Number(helpers.formatNumber(n)).toFixed(2)
  }
  return null
}

const BasicNumberInput: React.FC = () => {
  const [value, setValue] = useState<number>(null)

  return (
    <>
      <Cell.Group title="基础用法">
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
          title="受控"
          value={
            <NumberInput
              placeholder="请输入"
              value={value}
              onChange={setValue}
            />
          }
        />

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
          title="其他和 TextInput 一样"
          value={
            <NumberInput
              placeholder="请输入"
              defaultValue={10}
              max={1000.12}
              onChange={consoleNum}
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
          divider={false}
        />
      </Cell.Group>
      <Cell.Group title="其他用法">
        <Text>自定义宽</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <Text style={{ marginRight: 8 }}>采购量</Text>
          <NumberInput
            placeholder="请输入"
            addonAfter="件"
            textAlign="right"
            inputWidth={90}
            min={0}
            max={999}
            bordered
            addonGroupStyle={{ marginRight: 8 }}
          />
          <NumberInput
            placeholder="请输入"
            addonAfter="kg"
            textAlign="right"
            inputWidth={90}
            min={0}
            max={999999}
            bordered
          />
        </View>
      </Cell.Group>
    </>
  )
}

export default BasicNumberInput
