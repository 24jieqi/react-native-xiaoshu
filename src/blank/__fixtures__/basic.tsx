/**
 * title: 基础用法
 * desc: left、right、top、bottom 四个方向，可以独立设置具体的边距，也可以通过 size 修改默认大小。
 */

import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Blank } from '@fruits-chain/react-native-xiaoshu'

const ctxStyle = { backgroundColor: '#f30' }
const blankStyle = { backgroundColor: '#098' }

const BasicButtonBar: React.FC = () => {
  return (
    <ScrollView>
      <Blank style={blankStyle}>
        <Text style={ctxStyle}>默认状态:左右边距</Text>
      </Blank>

      <Blank top bottom style={blankStyle}>
        <Text style={ctxStyle}>上下左右:边距大小默认</Text>
      </Blank>

      <Blank top bottom type="padding" style={blankStyle}>
        <Text style={ctxStyle}>上下左右:边距大小默认:内边距</Text>
      </Blank>
      <Blank size="l" style={blankStyle}>
        <Text style={ctxStyle}>l 状态:左右边距</Text>
      </Blank>
      <Blank size="m" style={blankStyle}>
        <Text style={ctxStyle}>m 状态:左右边距</Text>
      </Blank>
      <Blank size="s" style={blankStyle}>
        <Text style={ctxStyle}>s 状态:左右边距</Text>
      </Blank>
      <Blank
        left={false}
        top={12}
        right={24}
        bottom={36}
        type="padding"
        style={blankStyle}>
        <Text style={ctxStyle}>自定义大小:内边距</Text>
      </Blank>
    </ScrollView>
  )
}

export default BasicButtonBar
