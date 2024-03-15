/**
 * title: ref 使用
 * description: 通过 ref 关联表单实例。
 */

import React, { useRef } from 'react'
import type { FormInstance } from '@fruits-chain/react-native-xiaoshu'
import {
  Card,
  Form,
  Field,
  Button,
  Toast,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicFormRef: React.FC = () => {
  const FormRef = useRef<FormInstance>(null)

  return (
    <Card title="用户登录 useRef" square>
      <Form
        ref={FormRef}
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

        <Space head>
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
        </Space>
      </Form>
    </Card>
  )
}

export default BasicFormRef
