/**
 * title: useFormInstance
 * description: 获取当前上下文正在使用的 Form 实例，常见于封装子组件消费无需透传 Form 实例。
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

const BasicFormUseFormInstanceSub = () => {
  const form = Form.useFormInstance()

  return (
    <Button
      text="重置所有"
      type="ghost"
      onPress={() => {
        form.resetFields(['username', 'password', 'password333'])
      }}
    />
  )
}

const BasicFormUseFormInstance: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Card title="useFormInstance" square>
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
          ]}
          validateTrigger="onEndEditing">
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
          {({ getFieldValue, setFieldsValue }) => {
            console.log(getFieldValue('password'))
            return (
              <Form.Item name="password333">
                <Field.TextInput
                  title="其他"
                  placeholder="请输入其他"
                  onChange={t => {
                    console.log('set AAA')
                    setFieldsValue({
                      AAA: t,
                    })
                  }}
                />
              </Form.Item>
            )
          }}
        </Form.Item>

        <Space head>
          <Button text="提交" type="primary" onPress={form.submit} />
          <BasicFormUseFormInstanceSub />
        </Space>
      </Form>
    </Card>
  )
}

export default BasicFormUseFormInstance
