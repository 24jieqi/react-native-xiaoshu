import {
  Form,
  Field,
  BottomBar,
  Button,
} from '@fruits-chain/react-native-xiaoshu'
import React from 'react'

import { KeyboardAwareScrollView } from '~/components/keyboard-aware-scroll-view'

const selectorOption = new Array(10).fill(0).map((_, index) => ({
  label: `选项-${index}`,
  value: index,
}))

const Issues75 = () => {
  return (
    <>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Form>
          <Form.Item name="a1">
            <Field.TextInput required title="你的文字" placeholder="请输入" />
          </Form.Item>

          <Form.Item name="a2">
            <Field.Selector
              required
              title="你的选择"
              placeholder="请选择"
              options={selectorOption}
            />
          </Form.Item>

          <Form.Item name="a3">
            <Field.Date required title="你的时间" placeholder="请选择" />
          </Form.Item>
        </Form>
      </KeyboardAwareScrollView>

      <BottomBar>
        <Button text="提交" type="primary" />
      </BottomBar>
    </>
  )
}

export default Issues75
