import React from 'react'
import { CellGroup, Field, Toast } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldText: React.FC = () => {
  return (
    <CellGroup title="Field Text">
      <Field.Text title="标题" value="显示的文案" />
      <Field.Text title="商品类型" value="一般用于表单文案显示" />
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
        bordered={false}
      />
    </CellGroup>
  )
}

export default BasicFieldText
