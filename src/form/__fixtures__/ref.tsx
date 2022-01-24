import React, { useRef } from 'react'
import type { FormInstance } from '@fruits-chain/react-native-xiaoshu'
import {
  CellGroup,
  Form,
  Field,
  Button,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'

const BasicFormBase: React.FC = () => {
  const FormRef = useRef<FormInstance>(null)

  return (
    <Form
      ref={FormRef}
      onFinish={values => {
        console.log(values)
        Toast(JSON.stringify(values))
      }}>
      <CellGroup title="用户登录 useRef">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}>
          <Field.TextInput required title="用户名" placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}>
          <Field.TextInput
            required
            title="密码"
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>

        <Button
          text="管理员"
          danger
          onPress={() => {
            FormRef.current.setFieldsValue({
              username: 'admin',
            })
          }}
        />

        <Button
          text="提交"
          type="primary"
          onPress={() => {
            FormRef.current.submit()
          }}
        />
      </CellGroup>
    </Form>
  )
}

export default BasicFormBase
