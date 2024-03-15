/**
 * title: Form.List
 * description: 使用 Form.List 渲染一组控件。
 */

import React from 'react'
import {
  Card,
  Form,
  Field,
  Button,
  Toast,
  Dialog,
  Space,
} from '@fruits-chain/react-native-xiaoshu'
import { DeleteFill } from '@fruits-chain/icons-react-native'

const BasicFormList: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Card title="List" square>
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
          <Field.TextInput
            required
            title="用户名"
            placeholder="请输入用户名"
            divider={false}
          />
        </Form.Item>

        <Form.List name="address">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field, fieldIndex) => {
                  return (
                    <Card
                      key={field.key}
                      title={`地址 ${fieldIndex + 1}`}
                      extra={
                        <DeleteFill
                          onPress={() => {
                            Dialog.confirm({
                              title: '提示',
                              message: '确定要删除？',
                              confirmButtonColor: '#f30',
                              confirmButtonText: '删除',
                            })
                              .then(data => {
                                if (data === 'confirm') {
                                  remove(fieldIndex)
                                }
                              })
                              .catch(() => {})
                          }}
                        />
                      }>
                      <Form.Item
                        name={[field.name, 'code']}
                        rules={[
                          {
                            required: true,
                            message: '请输入邮编',
                          },
                        ]}>
                        <Field.TextInput
                          required
                          title="邮编"
                          placeholder="请输入邮编"
                        />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, 'city']}
                        rules={[
                          {
                            required: true,
                            message: '请输入城市',
                          },
                        ]}>
                        <Field.TextInput
                          required
                          title="城市"
                          placeholder="请输入城市"
                          divider={false}
                        />
                      </Form.Item>
                    </Card>
                  )
                })}
                <Button
                  text="新增地址"
                  color="#780"
                  onPress={() => {
                    add({})
                  }}
                />
              </>
            )
          }}
        </Form.List>

        <Space head>
          <Button text="提交" type="primary" onPress={form.submit} />
        </Space>
      </Form>
    </Card>
  )
}

export default BasicFormList
