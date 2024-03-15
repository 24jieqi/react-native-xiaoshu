/**
 * title: 基础用法
 * description: 可以传入一个 buttons 按钮数组，也可以嵌套子元素。
 */

import React from 'react'
import { ScrollView } from 'react-native'

import CardBase from './base'
import CardSquare from './square'
import CardLoading from './loading'

const BasicButtonBar: React.FC = () => {
  return (
    <ScrollView>
      <CardBase />
      <CardSquare />
      <CardLoading />
    </ScrollView>
  )
}

export default BasicButtonBar
