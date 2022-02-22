/**
 * title: 基础使用
 * desc: 给 Form.Item 添加校验规则，form 表单实例关联表单并操作数据。
 */

import React from 'react'
import {
  Card,
  Form,
  Field,
  Button,
  Toast,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicFormBase: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Card title="用户登录 useForm" square>
      <Form
        form={form}
        onFinish={values => {
          console.log(values)
          Toast(JSON.stringify(values))
        }}>
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
            secureTextEntry
            title="密码"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item dependencies={['password']}>
          {({ getFieldValue }) => {
            console.log(getFieldValue('password'))
            return (
              <Form.Item name="password333">
                <Field.TextInput title="其他" placeholder="请输入其他" />
              </Form.Item>
            )
          }}
        </Form.Item>

        <Space head>
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
          <Button
            text="重置所有"
            type="ghost"
            onPress={() => {
              form.resetFields(['username', 'password', 'password333'])
            }}
          />
        </Space>
      </Form>
    </Card>
  )
}

export default BasicFormBase
