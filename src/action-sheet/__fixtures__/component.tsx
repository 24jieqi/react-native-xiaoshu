/**
 * title: 组件用法
 * description: 普通受控组件使用方式。
 */

import React, { useState } from 'react'

import { Cell, ActionSheet } from '@fruits-chain/react-native-xiaoshu'

const ActionSheetComponent: React.FC = () => {
  const [state, setState] = useState({
    cActionSheet1: {
      show: false,
    },
  })

  return (
    <>
      <Cell.Group title="组件调用">
        <Cell
          title="组件调用"
          isLink
          divider={false}
          onPress={() => {
            console.log('组件调用 -> show')
            setState(s => ({
              ...s,
              cActionSheet1: {
                ...s.cActionSheet1,
                show: true,
              },
            }))
          }}
        />
      </Cell.Group>

      <ActionSheet.Component
        title="这里应该有一个标题"
        description="这是一段描述信息"
        cancelText="取消"
        visible={state.cActionSheet1.show}
        actions={[
          { name: '选项1' },
          { name: '选项2', color: '#f30' },
          { name: 'loading', loading: true },
          { name: 'disabled', disabled: true },
          { name: '选项3' },
        ]}
        onPressOverlay={() => {
          console.log('组件调用 -> onPressOverlay')
          setState(s => ({
            ...s,
            cActionSheet1: {
              ...s.cActionSheet1,
              show: false,
            },
          }))
        }}
        onCancel={() => {
          console.log('组件调用 -> onCancel')
          setState(s => ({
            ...s,
            cActionSheet1: {
              ...s.cActionSheet1,
              show: false,
            },
          }))
        }}
        onSelect={(action, index) => {
          console.log(action)
          console.log(index)
          console.log('组件调用 -> onSelect')
          setState(s => ({
            ...s,
            cActionSheet1: {
              ...s.cActionSheet1,
              show: false,
            },
          }))
        }}
      />
    </>
  )
}

export default ActionSheetComponent
