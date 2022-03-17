/**
 * title: 表单
 * desc: 类似 Antd 桌面端操作
 */

import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'

import {
  ButtonBar,
  Button,
  Form,
  Field,
  Cell,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

// App 端使用 react-native-keyboard-aware-scroll-view 代替 ScrollView

const selectOptions = new Array(10)
  .fill(0)
  .map((_, i) => ({ value: i, label: `选项${i}` }))

const CaseForm1: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = useCallback((value: any) => {
    console.log(value)
  }, [])

  return (
    <>
      <ScrollView>
        <Form form={form} onFinish={onFinish}>
          <Space head tail>
            <Cell.Group>
              <Form.Item
                name="label"
                rules={[{ required: true, message: '请填写文案' }]}>
                <Field.TextInput
                  required
                  title="文案"
                  placeholder="请输入文案"
                />
              </Form.Item>

              <Form.Item
                name="label2"
                rules={[{ required: true, message: '请填写文案2' }]}>
                <Field.TextInput
                  required
                  title="文案2"
                  placeholder="请输入文案"
                />
              </Form.Item>

              <Form.Item
                name="select"
                rules={[{ required: true, message: '请选择选项' }]}>
                <Field.Selector
                  required
                  title="选项"
                  placeholder="请选择选项"
                  options={selectOptions}
                />
              </Form.Item>

              <Form.Item
                name="time"
                rules={[{ required: true, message: '请选择执行时间' }]}>
                <Field.Date
                  required
                  title="执行时间"
                  placeholder="请选择时间"
                />
              </Form.Item>

              <Form.Item
                name="day"
                rules={[{ required: true, message: '请选择落款日期' }]}>
                <Field.Date
                  required
                  mode="Y-D"
                  title="落款日期"
                  placeholder="请选择日期"
                />
              </Form.Item>
            </Cell.Group>
          </Space>
        </Form>
      </ScrollView>

      <ButtonBar alone>
        <Button text="保存" onPress={form.submit} />
      </ButtonBar>
    </>
  )
}

export default CaseForm1
