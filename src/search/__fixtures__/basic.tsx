/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'

import { Cell, Search, ActionSheet } from '@fruits-chain/react-native-xiaoshu'
import { MenuOutline } from '@fruits-chain/icons-react-native'
import { Text, View } from 'react-native'

const BasicPasswordInput: React.FC = () => {
  const [value1, setValue] = useState('多福多寿')

  return (
    <>
      <Cell.Group title="基础用法">
        <Search
          autoFocus
          placeholder="请输入关键词搜索"
          onSearch={v => {
            console.log(v)
          }}
        />
      </Cell.Group>
      <Cell.Group title="没有按钮">
        <Search
          autoSearch
          showSearchButton={false}
          placeholder="请输入关键词搜索"
          onSearch={v => {
            console.log(v)
          }}
        />
      </Cell.Group>
      <Cell.Group title="自定义左边内容">
        <Search
          autoFocus
          prefix={
            <View>
              <Text>自定义内容</Text>
            </View>
          }
          placeholder="请输入关键词搜索"
          onSearch={v => {
            console.log(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="防抖">
        <Search
          placeholder="请输入关键词搜索"
          autoSearch
          onSearchDebounceWait={500}
          onSearch={v => {
            console.log(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="受控组件">
        <Search
          placeholder="请输入关键词搜索"
          value={value1}
          onChangeText={v => {
            setValue(v.replace(/？/g, ''))
          }}
          onSearch={() => {
            console.log(value1)
          }}
        />
      </Cell.Group>

      <Cell.Group title="左侧自定义组件">
        <Search
          placeholder="请输入关键词搜索"
          showBack
          onPressBack={() => {
            console.log('返回')
          }}
        />
      </Cell.Group>

      <Cell.Group title="自动触发搜索">
        <Search
          autoSearch
          placeholder="请输入关键词搜索"
          onSearch={v => {
            console.log('autoSearch -> ', v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="搜索按钮右侧自定义内容">
        <Search
          placeholder="请输入关键词搜索"
          extra={
            <MenuOutline
              size={24}
              color="#098"
              style={{ marginLeft: 12 }}
              onPress={() => {
                ActionSheet({
                  actions: ['1', '3', '5'],
                  cancelText: '取消',
                })
                  .then(v => {
                    console.log(v)
                  })
                  .catch(() => {})
              }}
            />
          }
        />
      </Cell.Group>
    </>
  )
}

export default BasicPasswordInput
