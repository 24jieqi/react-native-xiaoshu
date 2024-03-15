/**
 * title: 输入框
 * description: 对话框内有一个输入框，支持数字、单/多行字符串，对应 numberInput、textInput 可以自定义输入框一些属性。异步操作配合 `beforeClose`、`onPressCancel`、`onPressConfirm` 控制点击按钮的 loading 状态。
 */

import React from 'react'

import { Cell, Dialog, Toast } from '@fruits-chain/react-native-xiaoshu'

const BasicDialogInput: React.FC = () => {
  return (
    <Cell.Group title="输入框">
      <Cell
        title="普通文字"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="普通文字:自定义顶部安全"
        isLink
        onPress={() => {
          Dialog.input({
            safeAreaTop: 200,
            title: '输入框？',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="普通文字:close"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
            },
            showClose: true,
          })
        }}
      />
      <Cell
        title="普通文字:提示文案"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框',
            placeholder: '请输入内容',
            message:
              '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="普通文字:必须有值:确认时延迟关闭"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              if (t.trim()) {
                console.log(t)
                return new Promise<void>(resolve => {
                  setTimeout(() => {
                    resolve()
                  }, 2000)
                })
              } else {
                Toast('请输入内容')
                return false
              }
            },
          })
        }}
      />
      <Cell
        title="普通文字:默认值"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            defaultValue: '43434',
            placeholder: '请输入内容',
            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="多行文字:默认值"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            type: 'textarea',
            defaultValue: '343434',

            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="多行文字:提示文案"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            placeholder: '请输入内容',
            message:
              '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            type: 'textarea',
            defaultValue: '343434',

            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="数字:digit"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            type: 'digit',
            placeholder: '请输入内容',
            numberInput: {
              keyboardType: 'number-pad',
              maxLength: 16,
            },
            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="数字:number"
        isLink
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            type: 'number',
            placeholder: '请输入内容',
            numberInput: {
              keyboardType: 'decimal-pad',
              maxLength: 12,
            },
            onPressConfirm: t => {
              console.log(t)
            },
          })
        }}
      />
      <Cell
        title="数字:number:4位小数:确认时延迟关闭"
        isLink
        divider={false}
        onPress={() => {
          Dialog.input({
            title: '输入框？',
            type: 'number',
            placeholder: '请输入内容',
            numberInput: {
              min: 0,
              limitDecimals: 4,
              addonBefore: '采购费用',
              addonAfter: '元',
              keyboardType: 'decimal-pad',
            },
            onPressConfirm: t => {
              if (!t.trim()) {
                Toast('请填写取消原因')
                return false
              }

              return new Promise<boolean>(resolve => {
                setTimeout(() => {
                  resolve(true)
                }, 600)
              })
            },
          })
        }}
      />
    </Cell.Group>
  )
}

export default BasicDialogInput
