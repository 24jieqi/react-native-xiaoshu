/**
 * title: Form.Provider
 * description: 使用 Form.Provider 关联两个独立表单。
 */

import React from 'react'
import { Text } from 'react-native'
import {
  Card,
  Form,
  Field,
  Button,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const FormOne: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form} name="one">
      <Card title="form 1" square>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
            },
          ]}>
          <Field.TextInput required title="用户名" placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}>
          <Field.TextInput required title="密码" placeholder="请输入密码" />
        </Form.Item>
        <Space head>
          <Button text="提交" type="primary" onPress={form.submit} />
        </Space>
      </Card>
    </Form>
  )
}

const FormTwo: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form} name="two">
      <Card title="form 2" square>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
            },
          ]}>
          <Field.TextInput required title="用户名" placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}>
          <Field.TextInput required title="密码" placeholder="请输入密码" />
        </Form.Item>
        <Space head>
          <Button text="提交" type="primary" onPress={form.submit} />
        </Space>
      </Card>
    </Form>
  )
}

const BasicFormContext: React.FC = () => {
  return (
    <Card title="Form Context" square>
      <Form.Provider
        onFormChange={(name, { changedFields, forms }) => {
          console.log('change from:', name, changedFields, forms)
          if (name === 'one') {
            forms.two.setFields(changedFields)
          }
        }}
        onFormFinish={(name, { values, forms }) => {
          console.log('finish from:', name, values, forms)
          if (name === 'two') {
            forms.one.setFieldsValue(values)
          }
        }}>
        <Space>
          <Text>
            Support global `validateMessages` config and communication between
            forms.
          </Text>

          <FormOne />
          <FormTwo />
        </Space>
      </Form.Provider>
    </Card>
  )
}

export default BasicFormContext
