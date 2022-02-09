/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'

import {
  Cell,
  CellGroup,
  PasswordInput,
} from '@fruits-chain/react-native-xiaoshu'

const BasicPasswordInput: React.FC = () => {
  const [value, setValue] = useState(false)

  return (
    <>
      <CellGroup title="基础用法">
        <Cell title="默认" value={<PasswordInput />} />
        <Cell title="默认" value={<PasswordInput bordered />} divider={false} />
      </CellGroup>

      <CellGroup title="状态控制">
        <Cell
          title="默认"
          value={<PasswordInput bordered defaultSecureTextEntry={false} />}
        />
        <Cell
          title="默认:受控"
          value={
            <PasswordInput
              bordered
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
      </CellGroup>
    </>
  )
}

export default BasicPasswordInput
