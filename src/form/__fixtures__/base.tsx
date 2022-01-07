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
      }}
      onFinishFailed={errorInfo => {
        Toast(errorInfo.errorFields[0].errors[0])
      }}>
      <CellGroup title="用户登录">
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

        <Button text="提交" type="primary" onPress={form.submit} />
      </CellGroup>
    </Form>
  )
}

export default BasicFormBase
