/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Cell, Dialog, Toast } from '@fruits-chain/react-native-xiaoshu'

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
      <Cell.Group title="基础用法">
        <Cell
          title="提示弹窗: 固定 200 宽"
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
          title="提示弹窗: 默认"
          isLink
          onPress={() => {
            Dialog({
              title: '这里是标题',
              message:
                '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            }).then(action => {
              console.log('提示弹窗：', action)
            })
          }}
        />
        <Cell
          title="提示弹窗:无内容"
          isLink
          onPress={() => {
            Dialog({
              title:
                '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森',
            }).then(action => {
              console.log('提示弹窗：', action)
            })
          }}
        />
        <Cell
          title="提示弹窗:无标题"
          isLink
          onPress={() => {
            Dialog({
              message:
                '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森',
            }).then(action => {
              console.log('提示弹窗（无标题）：', action)
            })
          }}
        />
        <Cell
          title="确认弹窗:单行文字"
          isLink
          onPress={() => {
            Dialog.confirm({
              title: '提示',
              message: '一袋米要抗几楼，一袋米要抗二楼',
            })
          }}
        />
        <Cell
          title="确认弹窗:多行文字"
          isLink
          onPress={() => {
            Dialog.confirm({
              title: '提示',
              message:
                '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            })
          }}
        />
        <Cell
          title="确认弹窗:删除"
          isLink
          onPress={() => {
            Dialog.confirm({
              title: '提示',
              message:
                '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
              confirmButtonColor: '#F30',
              confirmButtonText: '删除',
            })
          }}
        />
        <Cell
          title="确认弹窗:自定义颜色、文案"
          isLink
          divider={false}
          onPress={() => {
            Dialog.confirm({
              title: '提示',
              message: '确定要删除这个数据吗？',
              onClosed: () => {
                console.log('onClosedOnClosedOnClosedOnClosed')
              },
              confirmButtonColor: '#690',
              confirmButtonText: '删除吗',
              cancelButtonColor: '#007',
              cancelButtonText: '我就不',
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
      </Cell.Group>

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
                return true
              },
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
                return true
              },
            })
          }}
        />
        <Cell
          title="普通文字:必须有值"
          isLink
          onPress={() => {
            Dialog.input({
              title: '输入框',
              placeholder: '请输入内容',
              onPressConfirm: t => {
                if (t.trim()) {
                  console.log(t)
                  return new Promise(resolve => {
                    setTimeout(() => {
                      resolve(true)
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
                return true
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
                return true
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
                return true
              },
            })
          }}
        />
        <Cell
          title="数字"
          isLink
          divider={false}
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
      </Cell.Group>

      <Cell.Group title="组件调用">
        <Cell
          title="组件调用"
          isLink
          divider={false}
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
      </Cell.Group>

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
