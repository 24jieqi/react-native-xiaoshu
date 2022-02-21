/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'

import type { SelectorOption } from '@fruits-chain/react-native-xiaoshu'
import { Cell, Selector, Field } from '@fruits-chain/react-native-xiaoshu'

const units: SelectorOption[] = [
  {
    value: 1,
    label: '元/kg',
  },
  {
    value: 2,
    label: '元/件',
  },
]

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

  const [unitValue, setUnitValue] = useState<number | string>(units[0].value)

  return (
    <>
      <Cell.Group title="基础用法">
        <Cell
          title="没有超过一屏"
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
          title="超过一屏"
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
          title="超过一屏"
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

      <Cell.Group title="显示文案">
        <Field.TextInput
          title="在 Field.TextInput 中使用"
          defaultValue="100"
          valueExtra={
            <Selector.Text
              value={unitValue}
              options={units}
              onChange={setUnitValue}
            />
          }
        />
        <Field.TextInput
          title="在 Field.TextInput 中使用"
          defaultValue="100"
          textInputBordered
          valueExtra={
            <Selector.Text
              value={unitValue}
              options={units}
              onChange={setUnitValue}
              divider={false}
            />
          }
        />
        <Field.TextInput
          title="在输入框中使用"
          defaultValue="100"
          textInputBordered
          addonAfter={
            <Selector.Text
              value={unitValue}
              options={units}
              onChange={setUnitValue}
              divider={false}
            />
          }
        />
        <Cell
          title="在单元格中使用"
          center
          value={
            <Selector.Text
              value={unitValue}
              options={units}
              onChange={setUnitValue}
              arrowDirection="down"
              divider={false}
              title="单位切换"
              head={false}
            />
          }
          divider={false}
        />
      </Cell.Group>

      <Cell.Group title="组件调用">
        <Cell
          title="组件调用"
          isLink
          divider={false}
          onPress={() => {
            console.log('组件调用 -> show')
            setState(s => ({
              ...s,
              show: true,
            }))
          }}
        />
      </Cell.Group>

      <Selector.Component
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
    </>
  )
}

export default BasicActionSheet
