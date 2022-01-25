/**
 * title: 基础用法
 * desc: 通过函数调用，返回一个 Promise。
 */

import React from 'react'

import {
  Cell,
  CellGroup,
  ActionSheet,
} from '@fruits-chain/react-native-xiaoshu'

const ActionSheetBase: React.FC = () => {
  return (
    <>
      <CellGroup title="基础用法">
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
          bordered={false}
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
      </CellGroup>

      <CellGroup title="选项状态">
        <Cell
          title="选项状态"
          isLink
          bordered={false}
          onPress={() => {
            ActionSheet({
              actions: [
                { name: '着色选项', subname: '东方闪电', color: '#f30' },
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
      </CellGroup>
    </>
  )
}

export default ActionSheetBase
