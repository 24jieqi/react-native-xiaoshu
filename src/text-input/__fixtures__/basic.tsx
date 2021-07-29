import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Cell, CellGroup, TextInput } from 'react-native-xiaoshu'

const BasicTextInput: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <CellGroup title="基础用法">
        <Cell title="text" value={<TextInput placeholder="不限制输入" />} />

        <Cell
          title="number"
          value={<TextInput type="number" placeholder="数字和小数点" />}
        />

        <Cell
          title="digit"
          value={
            <TextInput type="digit" placeholder="数字" textAlign="right" />
          }
        />

        <Cell
          title="password"
          value={<TextInput type="password" placeholder="内容不可见" />}
        />

        <Cell
          title="textarea"
          value={<TextInput type="textarea" placeholder="多行文本" />}
        />

        <Cell
          title="clearTrigger"
          value={
            <TextInput clearable clearTrigger="always" placeholder="多行文本" />
          }
        />

        <Cell
          title="clearTrigger2"
          value={<TextInput clearable placeholder="多行文本" />}
        />

        <Cell
          title="受控使用"
          value={
            <TextInput
              type="digit"
              placeholder="受控使用"
              value={value}
              onChangeText={t => {
                if (+t > 100) {
                  t = '100'
                }

                setValue(t)
              }}
            />
          }
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicTextInput
