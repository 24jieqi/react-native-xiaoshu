/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'

import { StepSelector, Cell } from '@fruits-chain/react-native-xiaoshu'
import { Text } from 'react-native'

const request = (pId: string, index: number) =>
  new Promise<{
    options: { value: string; label: string; index: string }[]
    placeholder: string
  }>(resolve => {
    setTimeout(() => {
      resolve({
        options:
          index === 3
            ? []
            : new Array(20).fill(0).map((_, i) => ({
                value: `${index * 100 + i}`,
                label: `选项${index}_${i}`,
                index: String.fromCharCode(
                  65 + Math.ceil((Math.random() * 10) / 3),
                ),
              })),
        placeholder: index === 0 ? '' : `请选择${index}`,
      })
    }, 500)
  })

const BasicStepSelector: React.FC = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <Cell.Group title="函数使用">
        <Cell
          title="选择"
          isLink
          onPress={() => {
            StepSelector({
              request: request,
              onConfirm: (v, o, isEnd) => {
                console.log('v => ', v)
                console.log('o => ', o)
                console.log('isEnd => ', isEnd)
              },
            }).catch(() => {})
          }}
        />
        <Cell
          title="选择:自定义loading"
          isLink
          onPress={() => {
            StepSelector({
              request: request,
              onConfirm: (v, o, isEnd) => {
                console.log('v => ', v)
                console.log('o => ', o)
                console.log('isEnd => ', isEnd)
              },
              loading: <Text style={{ textAlign: 'center' }}>加载中...</Text>,
            }).catch(() => {})
          }}
        />
        <Cell
          title="选择:默认值"
          isLink
          divider={false}
          onPress={() => {
            StepSelector({
              request: request,
              defaultValue: ['10', '111', '212'],
              onConfirm: (v, o, isEnd) => {
                console.log('v => ', v)
                console.log('o => ', o)
                console.log('isEnd => ', isEnd)
              },
            }).catch(() => {})
          }}
        />
      </Cell.Group>

      <Cell.Group title="组件使用">
        <Cell
          title="选择"
          onPress={() => {
            setState(true)
          }}
          isLink
          divider={false}
        />

        <StepSelector.Component<string>
          title="组件使用"
          request={request}
          visible={state}
          onChange={(v, o, e) => {
            console.log(v)
            console.log(o)

            if (e) {
              setState(false)
            }
          }}
          onPressClose={() => {
            setState(false)
          }}
        />
      </Cell.Group>
    </>
  )
}

export default BasicStepSelector
