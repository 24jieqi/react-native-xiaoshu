/**
 * title: 基础用法
 * description: 函数调用后返回一个 Promise。
 */

import React from 'react'

import { Cell, ActionSheet } from '@fruits-chain/react-native-xiaoshu'

const ActionSheetBase: React.FC = () => {
  return (
    <>
      <Cell.Group title="基础用法">
        <Cell
          title="提示弹窗"
          isLink
          onPress={() => {
            ActionSheet({
              actions: ['选项一', '选项二'],
            })
              .then(({ item, index }) => {
                console.log('提示弹窗 -> 选项')
                console.log(item)
                console.log(index)
              })
              .catch(e => {
                console.log('提示弹窗 -> 关闭')
                console.log(e)
              })
          }}
        />
        <Cell
          title="独立 callback"
          isLink
          onPress={() => {
            ActionSheet({
              actions: new Array(3).fill(0).map((_, index) => ({
                name: `选项${index}`,
                callback: () => {
                  console.log(index)
                },
              })),
            }).catch(() => {})
          }}
        />
        <Cell
          title="出现滚动条"
          isLink
          onPress={() => {
            ActionSheet({
              title: '出现滚动条',
              actions: new Array(20).fill(0).map((_, i) => `选项-${i}`),
              cancelText: '取消了',
              description: '会出现的',
            })
              .then(({ item, index }) => {
                console.log('提示弹窗 -> 选项')
                console.log(item)
                console.log(index)
              })
              .catch(e => {
                console.log('提示弹窗 -> 关闭')
                console.log(e)
              })
          }}
        />
        <Cell
          title="出现滚动条:自定义顶部边距"
          isLink
          onPress={() => {
            ActionSheet({
              safeAreaInsetTop: 100,
              title: '出现滚动条',
              actions: new Array(20).fill(0).map((_, i) => `选项-${i}`),
              cancelText: '取消了',
              description: '会出现的',
            })
              .then(({ item, index }) => {
                console.log('提示弹窗 -> 选项')
                console.log(item)
                console.log(index)
              })
              .catch(e => {
                console.log('提示弹窗 -> 关闭')
                console.log(e)
              })
          }}
        />
        <Cell
          title="展示取消按钮"
          isLink
          onPress={() => {
            ActionSheet({
              actions: ['选项一', '选项二'],
              cancelText: '取消了',
            })
              .then(({ item, index }) => {
                console.log('展示取消按钮 -> 选项')
                console.log(item)
                console.log(index)
              })
              .catch(e => {
                console.log('展示取消按钮 -> 关闭')
                console.log(e)
              })
          }}
        />
        <Cell
          title="展示描述信息"
          isLink
          divider={false}
          onPress={() => {
            ActionSheet({
              actions: ['选项一', '选项二'],
              cancelText: '取消了',
              description: '这是一段描述信息',
              beforeClose: (action, _, index) => {
                if (action === 'item') {
                  return new Promise(resolve => {
                    setTimeout(() => {
                      resolve(index === 0)
                    }, 3000)
                  })
                }

                return true
              },
            })
              .then(({ item, index }) => {
                console.log('展示描述信息 -> 选项')
                console.log(item)
                console.log(index)
              })
              .catch(e => {
                console.log('展示描述信息 -> 关闭')
                console.log(e)
              })
          }}
        />
      </Cell.Group>

      <Cell.Group title="选项状态">
        <Cell
          title="选项状态"
          isLink
          divider={false}
          onPress={() => {
            ActionSheet({
              actions: [
                { name: '着色选项', color: '#f30' },
                { name: 'loading', loading: true },
                { name: '禁用选项', disabled: true },
              ],
              cancelText: '取消了',
              closeOnPressOverlay: false,
            })
              .then(({ item, index }) => {
                console.log('选项状态 -> 选项')
                console.log(item)
                console.log(index)
              })
              .catch(e => {
                console.log('选项状态 -> 关闭')
                console.log(e)
              })
          }}
        />
      </Cell.Group>
    </>
  )
}

export default ActionSheetBase
