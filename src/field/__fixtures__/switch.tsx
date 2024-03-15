/**
 * title: 开关
 * description: 适合开启或关闭部分控件填写。
 */

import React, { useState } from 'react'
import { Cell, Field } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldSwitch: React.FC = () => {
  const [value, setValue] = useState(true)

  return (
    <Cell.Group title="Field Switch">
      <Field.Switch
        title="默认数据"
        onChange={v => {
          console.log(v)
        }}
        size={24}
        activeChildren="开启"
        inactiveChildren="关闭"
      />

      <Field.Switch
        title="默认数据:禁用"
        disabled
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="默认数据:默认值"
        defaultValue
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="自定义选中值、未选中值"
        activeValue="1"
        inactiveValue="2"
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="自定义选中值、未选中值:默认值"
        activeValue="1"
        inactiveValue="2"
        defaultValue="1"
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="受控:无onChange"
        value={value}
        onChange={v => {
          console.log(v)
        }}
      />

      <Field.Switch
        title="受控:有onChange"
        value={value}
        onChange={setValue}
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicFieldSwitch
