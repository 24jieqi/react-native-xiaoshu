/**
 * title: 其他属性
 * description: 前置/后置标签等
 */

import React from 'react'
import { Text } from 'react-native'

import { Cell, NumberInput, Space } from '@fruits-chain/react-native-xiaoshu'

const consoleNum = (n: number) => {
  console.log('[新数据]  ->  ', n)
}

const BasicNumberInputExtra: React.FC = () => {
  return (
    <Cell.Group title="其他属性">
      <Cell
        title="前置"
        value={
          <NumberInput
            placeholder="请输入"
            onChange={consoleNum}
            addonBefore="+"
            bordered
          />
        }
      />
      <Cell
        title="后置"
        value={
          <NumberInput
            placeholder="请输入"
            onChange={consoleNum}
            textAlign="right"
            addonAfter="元"
            bordered
          />
        }
      />
      <Cell
        title="前/后置"
        value={
          <NumberInput
            placeholder="请输入"
            onChange={consoleNum}
            textAlign="right"
            addonAfter="元"
            addonBefore="什么什么费用"
            bordered
          />
        }
      />

      <Cell
        title="内部前置"
        value={
          <NumberInput
            placeholder="请输入"
            onChange={consoleNum}
            prefix="+"
            bordered
          />
        }
      />
      <Cell
        title="内部后置"
        value={
          <NumberInput
            placeholder="请输入"
            onChange={consoleNum}
            textAlign="right"
            suffix="元"
            bordered
          />
        }
      />
      <Cell
        title="内部前/后置"
        value={
          <NumberInput
            placeholder="请输入"
            onChange={consoleNum}
            textAlign="right"
            suffix="元"
            prefix="什么什么费用"
            bordered
          />
        }
      />
      <Space
        head
        tail
        direction="horizontal"
        align="center"
        style={{ backgroundColor: '#fff' }}>
        <Text>采购量</Text>
        <NumberInput
          placeholder="请输入"
          addonAfter="件"
          textAlign="right"
          inputWidth={90}
          min={0}
          max={999}
          bordered
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
      </Space>
    </Cell.Group>
  )
}

export default BasicNumberInputExtra
