/**
 * title: 基础用法
 * desc: 通过函数的方式使用。
 */

import React from 'react'
import { Text } from 'react-native'

import type { SelectorOption } from '@fruits-chain/react-native-xiaoshu'
import { Cell, Selector } from '@fruits-chain/react-native-xiaoshu'

const BasicSelectorBase: React.FC = () => {
  return (
    <Cell.Group title="基础用法">
      <Cell
        title="单选"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 3; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
            })
          }

          Selector({
            title: '测试选项',
            options: v,
            value: 1,
          })
            .then(k => {
              console.log(k)
            })
            .catch(() => {})
        }}
      />
      <Cell
        title="单选:自定义渲染"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 3; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
              render: label => (
                <>
                  <Text style={{ color: '#f30' }}>{label}</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                </>
              ),
            })
          }

          Selector({
            title: '测试选项',
            options: v,
            value: 1,
          })
            .then(k => {
              console.log(k)
            })
            .catch(() => {})
        }}
      />
      <Cell
        title="单选:超过一屏"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 20; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
            })
          }

          Selector({
            title: '测试选项',
            options: v,
          })
            .then(k => {
              console.log(k)
            })
            .catch(() => {})
        }}
      />
      <Cell
        title="自定义顶部边距"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 20; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
            })
          }

          Selector({
            title: '测试选项',
            options: v,
            safeAreaInsetTop: 140,
          })
            .then(k => {
              console.log(k)
            })
            .catch(() => {})
        }}
      />
      <Cell
        title="暂无数据"
        isLink
        onPress={() => {
          Selector({
            title: '测试选项',
            options: [],
          }).catch(() => {})
        }}
      />
      <Cell
        title="回调的方式"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 3; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
            })
          }

          Selector({
            title: '测试选项',
            options: v,
            onChange: (v, o) => {
              console.log(v)
              console.log(o)
            },
          }).catch(() => {})
        }}
      />
      <Cell
        title="多选"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 3; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
            })
          }

          Selector({
            multiple: true,
            title: '测试选项',
            options: v,
            onChange: (v, o) => {
              console.log(v)
              console.log(o)
            },
          }).catch(() => {})
        }}
      />
      <Cell
        title="多选:超过一屏"
        isLink
        divider={false}
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 20; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
              disabled: index < 5,
            })
          }

          Selector({
            multiple: true,
            title: '测试选项',
            options: v,
            value: [1, 3, 4, 5],
          })
            .then(k => {
              console.log(k)
            })
            .catch(() => {})
        }}
      />
    </Cell.Group>
  )
}

export default BasicSelectorBase
