/**
 * title: 自定义输入框
 * description: 对话框内有输入框的情况。
 */

import React, { useCallback, useState } from 'react'

import {
  Cell,
  Dialog,
  NumberInput,
  Button,
  Blank,
  Space,
} from '@fruits-chain/react-native-xiaoshu'
import { Keyboard } from 'react-native'

const BasicDialogKeyboard: React.FC = () => {
  const [state, setState] = useState({
    cDialog1: {
      show: false,
    },
  })

  const closeDialog1 = useCallback(() => {
    Keyboard.dismiss()
    setState(s => ({
      ...s,
      cDialog1: {
        ...s.cDialog1,
        show: false,
      },
    }))
  }, [])

  return (
    <>
      <Cell.Group title="自定义输入框">
        <Cell
          title="简单输入框"
          isLink
          divider={false}
          onPress={() => {
            console.log('简单输入框')
            setState(s => ({
              ...s,
              cDialog1: {
                ...s.cDialog1,
                show: true,
              },
            }))
          }}
        />
      </Cell.Group>

      <Dialog.Keyboard
        title="这里应该有一个标题"
        message="为了您的账户安全，首次登录请修改密码！密码为8-20位大小写字母、数字或符号，不允许有空格"
        visible={state.cDialog1.show}
        showConfirmButton={false}
        showCancelButton={false}
        closeOnPressOverlay={false}
        showClose
        onPressClose={closeDialog1}>
        <Blank top={24} bottom={32} left={24} right={24}>
          <Space gap={16}>
            <NumberInput
              bordered
              addonBefore="临时工"
              addonAfter="人"
              min={0}
              placeholder="请填写"
              keyboardType="number-pad"
            />
            <NumberInput
              bordered
              addonBefore="正式工"
              addonAfter="人"
              min={0}
              placeholder="请填写"
              keyboardType="number-pad"
            />
          </Space>
        </Blank>

        <Blank bottom={24} left={24} right={24}>
          <Button text="确定" type="primary" onPress={closeDialog1} />
        </Blank>
      </Dialog.Keyboard>
    </>
  )
}

export default BasicDialogKeyboard
