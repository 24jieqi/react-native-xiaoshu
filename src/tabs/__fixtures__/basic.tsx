/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import {
  Tabs,
  Result,
  Card,
  Blank,
  Field,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const T = () => {
  const [text, setText] = useState('')

  return (
    <>
      <Field.TextInput
        title="测试"
        placeholder="请输入"
        value={text}
        onChange={setText}
      />
      <Result status="warning" title="嗯哼？1" subtitle="哈哈哈" />
      <Button
        onPress={() => {
          console.log(text)
        }}>
        打印
      </Button>
    </>
  )
}

const BasicTabs: React.FC = () => {
  const [value1, setValue1] = useState('2')

  return (
    <ScrollView>
      <Blank top>
        <Card square bodyPadding={false}>
          <Tabs indicatorWidth={24}>
            <Tabs.TabPane key="1" tab="第一个" badge="44">
              <T />
            </Tabs.TabPane>

            {null}

            <>
              <Tabs.TabPane key="3" tab="第二个1">
                <T />
              </Tabs.TabPane>
              <Tabs.TabPane key="4" tab="第二个2">
                <Result status="warning" title="嗯哼？2" subtitle="哈哈哈" />
              </Tabs.TabPane>
            </>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>
      <Blank top>
        <Card square bodyPadding={false}>
          <Tabs indicatorWidth={24} divider>
            <Tabs.TabPane key="1" tab="第一个">
              <T />
            </Tabs.TabPane>

            {null}

            <>
              <Tabs.TabPane key="3" tab="第二个1">
                <T />
              </Tabs.TabPane>
              <Tabs.TabPane key="4" tab="第二个2">
                <Result status="warning" title="嗯哼？2" subtitle="哈哈哈" />
              </Tabs.TabPane>
            </>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>
      <Blank top>
        <Card title="受控模式" square bodyPadding={false}>
          <Tabs activeKey={value1} onChange={setValue1}>
            <Tabs.TabPane key="1" tab="第一个">
              <Result status="success" title="啊哈" subtitle="嘿嘿嘿" />
            </Tabs.TabPane>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>
      <Blank top>
        <Card title="部分 TabBar 自定义" square bodyPadding={false}>
          <Tabs
            activeKey={value1}
            onChange={setValue1}
            tabAlign="left"
            textColor="#999"
            activeTextColor="#098"
            indicatorColor="#098"
            indicatorHeight={4}
            divider
            dividerColor="#098">
            <Tabs.TabPane key="1" tab="第一个">
              <Result status="success" title="啊哈" subtitle="嘿嘿嘿" />
            </Tabs.TabPane>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>

      <Tabs
        tabBarHeight={60}
        tabBarBackgroundColor="#f9f9f9"
        tabBarStyle={{ marginTop: 40 }}>
        <Tabs.TabPane key="1" tab="第一个">
          <Result status="success" title="啊哈" subtitle="嘿嘿嘿" />
        </Tabs.TabPane>

        <Tabs.TabPane key="2" tab="第二个">
          <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
        </Tabs.TabPane>
      </Tabs>
    </ScrollView>
  )
}

export default BasicTabs
