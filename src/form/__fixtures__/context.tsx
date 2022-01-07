import React from 'react'
import { Text } from 'react-native'
import {
  CellGroup,
  Form,
  Field,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const FormOne: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form} name="one">
      <CellGroup title="form 1">
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
        <Button text="提交" type="primary" onPress={form.submit} />
      </CellGroup>
    </Form>
  )
}

const FormTwo: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form} name="two">
      <CellGroup title="form 2">
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
        <Button text="提交" type="primary" onPress={form.submit} />
      </CellGroup>
    </Form>
  )
}

const BasicFormContext: React.FC = () => {
  return (
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
      <Text>Form Context</Text>
      <Text>
        Support global `validateMessages` config and communication between
        forms.
      </Text>
      <FormOne />
      <FormTwo />
    </Form.Provider>
  )
}

export default BasicFormContext
