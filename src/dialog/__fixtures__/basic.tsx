import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Cell, CellGroup, Dialog } from 'react-native-xiaoshu'

const BasicDialog: React.FC = () => {
  const [state, setState] = useState({
    cDialog1: {
      show: false,
      cancel: false,
      confirm: false,
    },
  })

  return (
    <ScrollView>
      <CellGroup title="基础用法" bordered={false}>
        <Cell
          title="提示弹窗"
          isLink
          onPress={() => {
            Dialog({
              title: '这里是标题',
              message: '提示弹窗',
              width: 200,
            }).then(action => {
              console.log('提示弹窗：', action)
            })
          }}
        />
        <Cell
          title="提示弹窗（无标题）"
          isLink
          onPress={() => {
            Dialog({
              message: '代码是写出来给人看的，附带能在机器上运行',
            }).then(action => {
              console.log('提示弹窗（无标题）：', action)
            })
          }}
        />
        <Cell
          title="确认弹窗"
          isLink
          bordered={false}
          onPress={() => {
            Dialog.confirm({
              message: '确认弹窗',
              onClosed: () => {
                console.log('onClosedOnClosedOnClosedOnClosed')
              },
              beforeClose: action =>
                new Promise(resolve => {
                  setTimeout(() => {
                    if (action === 'cancel') {
                      resolve(false)
                    } else {
                      resolve(true)
                    }
                  }, 3000)
                }),
            }).then(action => {
              if (action === 'confirm') {
                console.log('确认弹窗->确定')
              }
              if (action === 'cancel') {
                console.log('确认弹窗->取消')
              }
            })
          }}
        />
      </CellGroup>

      <CellGroup title="输入框" bordered={false}>
        <Cell
          title="普通文字"
          isLink
          onPress={() => {
            Dialog.input({
              title: '输入框？',
              placeholder: '请输入内容',
              onPressConfirm: t => {
                console.log(t)
                return true
              },
            })
          }}
        />
        <Cell
          title="普通文字_默认值"
          isLink
          onPress={() => {
            Dialog.input({
              title: '输入框？',
              defaultValue: '43434',
              placeholder: '请输入内容',
              onPressConfirm: t => {
                console.log(t)
                return true
              },
            })
          }}
        />
        <Cell
          title="多行文字_默认值"
          isLink
          onPress={() => {
            Dialog.input({
              title: '输入框？',
              placeholder: '请输入内容',
              type: 'textarea',
              defaultValue: '343434',

              onPressConfirm: t => {
                console.log(t)
                return true
              },
            })
          }}
        />
        <Cell
          title="数字"
          isLink
          bordered={false}
          onPress={() => {
            Dialog.input({
              title: '输入框？',
              type: 'digit',
              placeholder: '请输入内容',
              onPressConfirm: t => {
                console.log(t)
                return true
              },
            })
          }}
        />
      </CellGroup>

      <CellGroup title="组件调用" bordered={false}>
        <Cell
          title="组件调用"
          isLink
          bordered={false}
          onPress={() => {
            console.log('组件调用')
            setState(s => ({
              ...s,
              cDialog1: {
                ...s.cDialog1,
                show: true,
              },
            }))
          }}
        />
      </CellGroup>

      <Dialog.Component
        showCancelButton
        title="这里应该有一个标题"
        visible={state.cDialog1.show}
        confirmButtonLoading={state.cDialog1.confirm}
        cancelButtonLoading={state.cDialog1.cancel}
        onPressOverlay={() => {
          setState(s => ({
            ...s,
            cDialog1: {
              cancel: false,
              confirm: false,
              show: false,
            },
          }))
        }}
        onPressCancel={() => {
          console.log('onPressCancel')
          setState(s => ({
            ...s,
            cDialog1: {
              ...s.cDialog1,
              cancel: true,
            },
          }))
        }}
        onPressConfirm={() => {
          console.log('onPressConfirm')
          setState(s => ({
            ...s,
            cDialog1: {
              ...s.cDialog1,
              confirm: true,
            },
          }))

          setTimeout(() => {
            setState(s => ({
              ...s,
              cDialog1: {
                cancel: false,
                confirm: false,
                show: false,
              },
            }))
          }, 1000)
        }}
        message="哈哈哈哈哈哈哈嗝"
      />
    </ScrollView>
  )
}

export default BasicDialog
