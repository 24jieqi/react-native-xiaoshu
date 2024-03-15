/**
 * title: 选择控件
 * description: 适合单选、多选。
 */

import React, { useState } from 'react'
import { Text } from 'react-native'
import { Cell, Field } from '@fruits-chain/react-native-xiaoshu'

const options = new Array(6).fill(0).map((_, index) => ({
  value: index,
  label: `选项 ${index}`,
}))

const BasicFieldSelector: React.FC = () => {
  const [s1, setS1] = useState(undefined as number)
  const [s2, setS2] = useState([] as number[])

  return (
    <Cell.Group title="Field Selector">
      <Field.Selector
        title="单选单选单选单选单选单选单选单选单选单选"
        placeholder="请选择"
        value={s1}
        options={options}
        onChange={v => {
          setS1(v as number)
        }}
        clearable
        valueTextStyle={{
          fontSize: 20,
        }}
      />
      <Field.Selector
        title="单选:renderResultText"
        placeholder="请选择"
        value={s1}
        options={options}
        onChange={v => {
          setS1(v as number)
        }}
        renderResultText={(_, opts) => {
          if (opts.length) {
            return (
              <>
                <Text
                  style={{ textAlign: 'right', fontSize: 14, color: '#666' }}>
                  {opts[0].label}
                </Text>
                <Text
                  style={{ textAlign: 'right', fontSize: 12, color: '#098' }}>
                  其他描述
                </Text>
              </>
            )
          }

          return undefined
        }}
      />
      <Field.Selector
        title="单选:optionsLoading"
        placeholder="请选择"
        value={s1}
        options={options}
        optionsLoading
      />
      <Field.Selector
        title="单选:自定义渲染"
        placeholder="请选择"
        value={s1}
        options={options.map(item => ({
          ...item,
          render: () => <Text style={{ color: '#098' }}>{item.label}</Text>,
        }))}
        onChange={v => {
          setS1(v as number)
        }}
      />
      <Field.Selector
        title="单选:禁用"
        placeholder="请选择"
        editable={false}
        value={s1}
        options={options}
        onChange={v => {
          setS1(v as number)
        }}
      />
      <Field.Selector
        clearable
        title="单选:clearable"
        placeholder="请选择"
        value={s1}
        options={options}
        onChange={v => {
          setS1(v as number)
        }}
      />
      <Field.Selector
        multiple
        title="多选"
        placeholder="请选择"
        value={s2}
        options={options}
        onChange={v => {
          setS2(v as number[])
        }}
      />
      <Field.Selector
        multiple
        title="多选多选多选多选多选多选"
        titleTextNumberOfLines={1}
        titleStyle={{ flexBasis: 120 }}
        placeholder="请选择"
        value={s2}
        options={options}
        onChange={v => {
          setS2(v as number[])
        }}
      />
      <Field.Selector
        multiple
        title="多选:搜索"
        titleTextNumberOfLines={1}
        titleStyle={{ flexBasis: 120 }}
        placeholder="请选择"
        value={s2}
        search
        options={options}
        onChange={v => {
          setS2(v as number[])
        }}
      />
      <Field.Selector
        multiple
        title="多选"
        placeholder="请选择"
        value={s2}
        options={options}
        onChange={v => {
          setS2(v as number[])
        }}
        valueTextNumberOfLines={1}
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicFieldSelector
