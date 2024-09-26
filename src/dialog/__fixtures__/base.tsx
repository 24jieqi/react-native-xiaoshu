/**
 * title: 基础用法
 * description: 采用函数的方式使用，自定义标题、message、按钮，异步操作配合 `beforeClose` 控制点击按钮的 loading 状态。
 */

import React from 'react'

import { Cell, Dialog } from '@fruits-chain/react-native-xiaoshu'

const BasicDialogBase: React.FC = () => {
  return (
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
        title="提示弹窗: close"
        isLink
        onPress={() => {
          Dialog({
            title: '这里是标题',
            showClose: true,
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
        title="确认弹窗:单行文字:按钮逆转"
        isLink
        onPress={() => {
          Dialog.confirm({
            title: '提示',
            message: '一袋米要抗几楼，一袋米要抗二楼',
            buttonReverse: true,
          }).then(action => {
            if (action === 'confirm') {
              Dialog({
                message: 'confirm',
              })
            }
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
        title="确认弹窗:按钮文案加粗"
        isLink
        onPress={() => {
          Dialog.confirm({
            title: '提示',
            message:
              '一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞',
            cancelButtonTextBold: true,
            // 默认值就是 true
            // confirmButtonTextBold: true,
          })
        }}
      />
      <Cell
        title="确认弹窗:自定义颜色、文案、beforeClose"
        isLink
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
      <Cell
        title="其他:自定义 Overlay 颜色"
        isLink
        divider={false}
        onPress={() => {
          Dialog.confirm({
            title: '提示',
            message: '自定义 Overlay 颜色',
            overlayBackgroundColor: '#098',
          })
        }}
      />
    </Cell.Group>
  )
}

export default BasicDialogBase
