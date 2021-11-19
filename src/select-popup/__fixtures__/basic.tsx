import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import type { SelectPopupOption } from 'react-native-xiaoshu'
import { Cell, CellGroup, SelectPopup } from 'react-native-xiaoshu'

const BasicActionSheet: React.FC = () => {
  const [state, setState] = useState({
    show: false,
    option: [
      { value: 1, label: '111111' },
      { value: 2, label: '2222222' },
      { value: 3, label: '3333333' },
    ],
    value: null,
  })

  return (
    <ScrollView>
      <CellGroup title="基础用法" bordered={false}>
        <Cell
          title="没有超过一屏"
          isLink
          onPress={() => {
            const v: SelectPopupOption[] = []

            for (let index = 0; index < 3; index++) {
              v.push({
                label: `文案_${index}`,
                value: index,
              })
            }

            SelectPopup({
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
          title="超过一屏"
          isLink
          onPress={() => {
            const v: SelectPopupOption[] = []

            for (let index = 0; index < 20; index++) {
              v.push({
                label: `文案_${index}`,
                value: index,
              })
            }

            SelectPopup({
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
            const v: SelectPopupOption[] = []

            for (let index = 0; index < 20; index++) {
              v.push({
                label: `文案_${index}`,
                value: index,
              })
            }

            SelectPopup({
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
            SelectPopup({
              title: '测试选项',
              options: [],
            }).catch(() => {})
          }}
        />
        <Cell
          title="回调的方式"
          isLink
          onPress={() => {
            const v: SelectPopupOption[] = []

            for (let index = 0; index < 3; index++) {
              v.push({
                label: `文案_${index}`,
                value: index,
              })
            }

            SelectPopup({
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
            const v: SelectPopupOption[] = []

            for (let index = 0; index < 3; index++) {
              v.push({
                label: `文案_${index}`,
                value: index,
              })
            }

            SelectPopup({
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
          title="超过一屏"
          isLink
          bordered={false}
          onPress={() => {
            const v: SelectPopupOption[] = []

            for (let index = 0; index < 20; index++) {
              v.push({
                label: `文案_${index}`,
                value: index,
                disabled: index < 5,
              })
            }

            SelectPopup({
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
      </CellGroup>

      <View style={{ height: 20 }} />

      <CellGroup title="组件调用" bordered={false}>
        <Cell
          title="组件调用"
          isLink
          bordered={false}
          onPress={() => {
            console.log('组件调用 -> show')
            setState(s => ({
              ...s,
              show: true,
            }))
          }}
        />
      </CellGroup>

      <SelectPopup.Component
        title="这里应该有一个标题"
        visible={state.show}
        options={state.option}
        value={state.value}
        onClose={() => {
          console.log('组件调用 -> onClose')
          setState(s => ({
            ...s,
            show: false,
          }))
        }}
        onChange={(v, option) => {
          console.log(v)
          console.log(option)
          console.log('组件调用 -> onChange')
          setState(s => ({
            ...s,
            value: v,
            show: false,
          }))
        }}
      />

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicActionSheet
