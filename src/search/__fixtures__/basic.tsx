/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'

import { Cell, Search } from '@fruits-chain/react-native-xiaoshu'

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
    </>
  )
}

export default BasicPasswordInput
