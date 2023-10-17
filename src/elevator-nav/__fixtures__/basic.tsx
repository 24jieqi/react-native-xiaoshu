/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { Text, View } from 'react-native'

import {
  Card,
  Space,
  ElevatorNav,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const BasicTag: React.FC = () => {
  const [more1, setMore1] = useState(false)
  const [more2, setMore2] = useState(false)

  return (
    <>
      <Space direction="horizontal">
        <Button
          text={`${more1 ? '减少' : '新增'}一个 Anchor（可能会报错）`}
          size="s"
          onPress={() => {
            setMore1(s => !s)
          }}
        />
        <Button
          text={`${more2 ? '减少' : '新增'}一个非 Anchor`}
          size="s"
          onPress={() => {
            setMore2(s => !s)
          }}
        />
      </Space>

      <ElevatorNav triggerOffset={500}>
        <Space tail head>
          <View style={{ height: 500 }}>
            <Text>其他非锚点区域</Text>
          </View>

          <ElevatorNav.Anchor title="基础用法">
            <Card title="基础用法" square>
              <View style={{ height: 220 }} />
            </Card>
          </ElevatorNav.Anchor>

          {more2 ? (
            <View style={{ height: 500 }}>
              <Text>其他非锚点区域</Text>
            </View>
          ) : null}

          <ElevatorNav.Anchor title="基础用法2">
            <Card title="基础用法2" square>
              <View style={{ height: 620 }} />
            </Card>
          </ElevatorNav.Anchor>

          {more1 ? (
            <ElevatorNav.Anchor title="基础用法more">
              <Card title="基础用法more" square>
                <View style={{ height: 620 }} />
              </Card>
            </ElevatorNav.Anchor>
          ) : null}

          <ElevatorNav.Anchor title="基础用法3">
            <Card title="基础用法3" square>
              <View style={{ height: 420 }} />
            </Card>
          </ElevatorNav.Anchor>

          <View style={{ height: 500 }}>
            <Text>其他非锚点区域</Text>
          </View>
        </Space>
      </ElevatorNav>
    </>
  )
}

export default BasicTag
