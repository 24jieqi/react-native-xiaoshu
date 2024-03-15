/**
 * title: 基础用法
 * description: 通过函数的方式使用，使用 `options` 填充选项，可以使用 `onChange` 响应改变后的值，也可以采用 Promise 的方式。`beforeChange` 可以拿到当前选择的值，也可以阻断弹出层关闭，返回 `boolean | Promise<boolean>`。
 */

import React from 'react'
import { Text, View } from 'react-native'

import { SelectorOption, Toast } from '@fruits-chain/react-native-xiaoshu'
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
              label: `文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_文案_${index}`,
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
        title="单选:可取消"
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
            cancellable: true,
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
              render: ({ label }) => (
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#f30' }}>{label}</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                </View>
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
            defaultValue: v[v.length - 2].value,
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
        title="函数响应，非 Promise"
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
        title="beforeChange"
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
            beforeChange: (v, o) => {
              console.log(v)
              console.log(o)
              return new Promise<boolean>(resolve => {
                const { close } = Toast.loading({
                  message: '核对中...',
                  forbidPress: true,
                })

                setTimeout(() => {
                  close()
                  resolve(true)
                }, 500)
              })
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
        title="多选:自定义渲染"
        isLink
        onPress={() => {
          const v: SelectorOption[] = []

          for (let index = 0; index < 3; index++) {
            v.push({
              label: `文案_${index}`,
              value: index,
              render: ({ label }) => (
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#f30' }}>{label}</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                  <Text style={{ color: '#999' }}>（优选）</Text>
                </View>
              ),
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
            defaultValue: [1, 3, 4, 5],
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
