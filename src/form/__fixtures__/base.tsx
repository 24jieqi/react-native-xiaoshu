import React from 'react'
import {
  CellGroup,
  Form,
  Field,
  Button,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'

const BasicFormBase: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      onFinish={values => {
        console.log(values)
        Toast(JSON.stringify(values))
      }}>
      <CellGroup title="用户登录 useForm">
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
            form.setFieldsValue({
              username: 'admin',
            })
          }}
        />

        <Button text="提交" type="primary" onPress={form.submit} />

        <Button
          text="重置"
          type="ghost"
          onPress={() => {
            form.resetFields(['username', 'password'])
          }}
        />
      </CellGroup>
    </Form>
  )
}

export default BasicFormBase
