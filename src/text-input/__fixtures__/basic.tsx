import React, { useState } from 'react'

import { Cell, CellGroup, TextInput, Button, Icon } from 'react-native-xiaoshu'

const BasicTextInput: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <CellGroup title="基础用法">
        <Cell title="text" value={<TextInput placeholder="不限制输入" />} />
        <Cell
          title="text"
          value={<TextInput placeholder="不限制输入" clearable />}
        />
        <Cell
          title="text"
          value={<TextInput placeholder="不限制输入" bordered />}
        />
        <Cell
          title="text"
          value={<TextInput placeholder="不限制输入" bordered clearable />}
        />
        <Cell
          title="text"
          value={
            <TextInput
              placeholder="不限制输入"
              prefix="prefixAAA"
              bordered
              clearable
            />
          }
        />
        <Cell
          title="text"
          value={
            <TextInput
              placeholder="不限制输入"
              prefix={<Icon.IconSuccessOutLine size={16} color="#680" />}
              suffix={
                <Button
                  type="primary"
                  size="mini"
                  text="发送验证码"
                  style={{ marginLeft: 8 }}
                />
              }
              bordered
              clearable
            />
          }
        />
        <Cell
          title="text"
          value={
            <TextInput
              placeholder="不限制输入"
              prefix="prefixAAA"
              suffix="suffix中文"
              bordered
              clearable
            />
          }
        />
        <Cell
          title="textarea"
          value={
            <TextInput
              type="textarea"
              placeholder="不限制输入"
              prefix="prefixAAA"
              suffix="suffix中文"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="不限制输入"
              addonAfter="addonAfterAAA"
              addonBefore="addonBefore中文"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="不限制输入"
              addonAfter="addonAfterAAA"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              type="number"
              placeholder="不限制输入"
              addonAfter="元"
              textAlign="right"
              clearable
            />
          }
        />

        <Cell
          title="text"
          innerStyle={{
            justifyContent: 'space-between',
          }}
          valueStyle={{
            width: 140,
            flex: 0,
          }}
          value={
            <TextInput
              type="number"
              placeholder="不限制输入"
              addonAfter="元"
              textAlign="right"
              bordered
              clearable
            />
          }
        />

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
          value={
            <TextInput
              type="password"
              placeholder="内容不可见"
              bordered
              keyboardAppearance="dark"
            />
          }
        />

        <Cell
          title="textarea"
          value={<TextInput type="textarea" placeholder="多行文本" />}
        />

        <Cell
          title="clearTrigger"
          value={
            <TextInput clearable clearTrigger="always" placeholder="单行文本" />
          }
        />

        <Cell
          title="clearTrigger2"
          value={<TextInput clearable placeholder="单行文本" />}
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
    </>
  )
}

export default BasicTextInput
