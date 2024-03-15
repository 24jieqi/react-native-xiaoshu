/**
 * title: 搜索
 * description: 当候选项太多的时候可以启用搜索。
 */

import React from 'react'

import type { SelectorOption } from '@fruits-chain/react-native-xiaoshu'
import { Cell, Selector } from '@fruits-chain/react-native-xiaoshu'

const BasicSelectorSearch: React.FC = () => {
  return (
    <Cell.Group title="搜索">
      <Cell
        title="单选"
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
            search: true,
          })
            .then(k => {
              console.log(k)
            })
            .catch(() => {})
        }}
      />
      <Cell
        title="多选"
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
            search: true,
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

export default BasicSelectorSearch
