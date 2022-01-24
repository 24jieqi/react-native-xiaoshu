import React, { useState } from 'react'
import { CellGroup, Field, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldTextInput: React.FC = () => {
  const [text1, setText1] = useState('')

  return (
    <CellGroup title="Field TextInput">
      <Field.TextInput title="非受控输入框" placeholder="请输入" />
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
        bordered={false}
      />
    </CellGroup>
  )
}

export default BasicFieldTextInput
