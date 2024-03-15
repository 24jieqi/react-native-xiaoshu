/**
 * title: 文字显示
 * description: 适合文案展示的地方。
 */

import React from 'react'
import { Cell, Field, Toast } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldText: React.FC = () => {
  return (
    <Cell.Group title="Field Text">
      <Field.Text title="标题" value="显示的文案" />
      <Field.Text title="商品类型" value="一般用于表单文案显示" />
      <Field.Text
        title="商品类型"
        value="一般用于表单文案显示一般用于表单文案显示"
        valueTextNumberOfLines={1}
      />
      <Field.Text
        title="商品类型商品类型商品类型商品类型商品类型商品类型商品类型"
        titleStyle={{
          flexBasis: 180,
        }}
        value="一般用于一般用于一般用于一般用于一般用于一般用于"
        titleTextNumberOfLines={1}
        valueTextNumberOfLines={1}
        isLink
      />
      <Field.Text
        title="供应商"
        placeholder="请选择"
        value="供应商名称"
        onPress={() => {
          Toast('点击选择后设置新值')
        }}
        isLink
      />
      <Field.Text
        title="供应商"
        placeholder="请选择"
        onPress={() => {
          Toast('点击选择后设置新值')
        }}
        isLink
        divider={false}
      />
    </Cell.Group>
  )
}

export default BasicFieldText
