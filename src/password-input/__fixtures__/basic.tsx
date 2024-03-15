/**
 * title: 综合用法
 * description: 点击图标切换输入框内容是否明文。
 */

import React, { useState } from 'react'

import { Cell, PasswordInput } from '@fruits-chain/react-native-xiaoshu'

const BasicPasswordInput: React.FC = () => {
  const [value, setValue] = useState(false)

  return (
    <>
      <Cell.Group title="基础用法">
        <Cell title="默认" value={<PasswordInput />} />
        <Cell title="默认" value={<PasswordInput bordered />} divider={false} />
      </Cell.Group>

      <Cell.Group title="状态控制">
        <Cell
          title="默认"
          value={<PasswordInput bordered defaultSecureTextEntry={false} />}
        />
        <Cell
          title="默认:受控"
          value={
            <PasswordInput
              bordered
              clearable
              secureTextEntry={value}
              onChangeSecureTextEntry={setValue}
            />
          }
        />
        <Cell
          title="默认:受控:不更新"
          value={<PasswordInput bordered secureTextEntry={value} />}
          divider={false}
        />
      </Cell.Group>
    </>
  )
}

export default BasicPasswordInput
