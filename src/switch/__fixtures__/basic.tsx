/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Switch, Cell, ButtonBar } from '@fruits-chain/react-native-xiaoshu'

const BasicSwitch: React.FC = () => {
  const [state, setState] = useState(true)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <Text>基础用法</Text>

        <Switch
          value={state}
          onChange={p => {
            console.log(p)
            setState(p)
          }}
          onPress={() => {
            console.log('基础用法')
          }}
        />

        <View style={{ height: 20 }} />

        <Switch
          defaultValue={true}
          onChange={p => {
            console.log(p)
          }}
        />

        <View style={{ height: 20 }} />

        <Text>禁用状态</Text>

        <Switch disabled value={state} />

        <View style={{ height: 20 }} />

        <Text>加载状态</Text>

        <Switch loading value={state} />

        <View style={{ height: 20 }} />

        <Text>自定义大小</Text>

        <Switch
          value={state}
          onChange={setState}
          size={50}
          onPress={() => {
            console.log('自定义大小')
          }}
        />

        <View style={{ height: 20 }} />

        <Text>自定义颜色</Text>

        <Switch
          value={state}
          onChange={setState}
          activeColor="#f30"
          inactiveColor="#ddd"
          onPress={() => {
            console.log('自定义颜色')
          }}
        />

        <View style={{ height: 20 }} />

        <Text>异步控制</Text>

        <Switch
          loading={loading}
          value={state}
          onChange={setState}
          beforeChange={() =>
            new Promise<boolean>(resolve => {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
                resolve(true)
              }, 2000)
            })
          }
        />

        <View style={{ height: 20 }} />

        <Text>受控</Text>

        <Switch loading={loading} value={state} />

        <View style={{ height: 20 }} />
      </ScrollView>
      <ButtonBar alone>
        <Cell
          title="单元格"
          bordered={false}
          value={
            <Switch
              value={state}
              onChange={p => {
                console.log(p)
                setState(p)
              }}
              onPress={() => {
                console.log('基础用法')
              }}
            />
          }
        />
      </ButtonBar>
    </>
  )
}

export default BasicSwitch
