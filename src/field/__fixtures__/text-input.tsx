/**
 * title: 输入框
 * description: 适用于单行、多行文本输入。
 */

import React, { useState } from 'react'
import { Cell, Field, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldTextInput: React.FC = () => {
  const [text1, setText1] = useState('')

  return (
    <Cell.Group title="Field TextInput">
      <Field.TextInput
        title="非受控输入框"
        placeholder="请输入"
        textInputStyle={{
          fontSize: 20,
        }}
      />
      <Field.TextInput
        title="非受控输入框:禁用"
        placeholder="请输入"
        editable={false}
        defaultValue="不能输入"
      />
      <Field.TextInput
        title="非受控输入框"
        placeholder="请输入"
        defaultValue="自带默认数据"
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.TextInput
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
              setText1('')
            }}
          />
        }
      />
      <Field.TextInput
        vertical
        title="多行输入"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
      />
      <Field.TextInput
        type="textarea"
        title="多行输入"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicFieldTextInput
