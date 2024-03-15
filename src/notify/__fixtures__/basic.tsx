/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Cell, Notify } from '@fruits-chain/react-native-xiaoshu'

const BasicNotify: React.FC = () => {
  const [state, setState] = useState({
    cNotify1: {
      show: false,
    },
  })

  return (
    <ScrollView>
      <Cell.Group title="基础用法">
        <Cell
          title="基础用法"
          isLink
          divider={false}
          onPress={() => {
            Notify('基础用法')
          }}
        />
      </Cell.Group>

      <Cell.Group title="通知类型">
        <Cell
          title="主要通知"
          isLink
          onPress={() => {
            Notify({
              type: 'primary',
              message: '主要通知',
            })
          }}
        />
        <Cell
          title="成功通知"
          isLink
          onPress={() => {
            Notify({
              type: 'success',
              message: '成功通知',
            })
          }}
        />
        <Cell
          title="危险通知"
          isLink
          onPress={() => {
            Notify({
              type: 'error',
              message: '危险通知',
            })
          }}
        />
        <Cell
          title="警告通知"
          isLink
          divider={false}
          onPress={() => {
            Notify({
              type: 'warning',
              message: '警告通知',
            })
          }}
        />
      </Cell.Group>

      <Cell.Group title="自定义配置">
        <Cell
          title="自定义颜色"
          isLink
          onPress={() => {
            Notify({
              message: '自定义颜色',
              backgroundColor: '#fff',
              color: '#f30',
            })
          }}
        />
        <Cell
          title="自定义时长"
          isLink
          divider={false}
          onPress={() => {
            Notify({
              message: '自定义时长',
              duration: 5000,
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
              cNotify1: {
                ...s.cNotify1,
                show: true,
              },
            }))

            setTimeout(() => {
              setState(s => ({
                ...s,
                cNotify1: {
                  ...s.cNotify1,
                  show: false,
                },
              }))
            }, 3000)
          }}
        />
      </Cell.Group>

      <Notify.Component
        visible={state.cNotify1.show}
        message="哈哈哈哈哈哈哈嗝"
        type="error"
        onPress={() => {
          console.log('点击了「哈哈哈哈哈哈哈嗝」')
        }}
      />
    </ScrollView>
  )
}

export default BasicNotify
