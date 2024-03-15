/**
 * title: 数字输入框
 * description: 适用于纯数字输入。
 */

import React, { useState } from 'react'
import { Cell, Field, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldTextInput: React.FC = () => {
  const [text1, setText1] = useState<number>(null)

  return (
    <Cell.Group title="Field NumberInput">
      <Field.NumberInput
        title="非受控输入框"
        placeholder="请输入"
        onChange={v => {
          console.log(v)
        }}
        textInputStyle={{
          fontSize: 20,
        }}
      />
      <Field.NumberInput
        title="非受控输入框:禁止输入"
        placeholder="请输入"
        onChange={v => {
          console.log(v)
        }}
        editable={false}
      />
      <Field.NumberInput
        title="非受控输入框:整数"
        type="digit"
        placeholder="请输入"
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="非受控输入框"
        placeholder="请输入"
        defaultValue={100}
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="非受控输入框:小数"
        placeholder="请输入"
        limitDecimals={3}
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="受控组件"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
        addonAfter={
          <Button
            text="清空"
            size="xs"
            danger
            onPress={() => {
              setText1(null)
            }}
          />
        }
      />
      <Field.NumberInput
        vertical
        title="上下"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
      />
      <Field.NumberInput
        vertical
        title="上下2"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
        divider={false}
        textInputBordered
      />
    </Cell.Group>
  )
}

export default BasicFieldTextInput
