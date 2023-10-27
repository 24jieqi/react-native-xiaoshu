/**
 * title: 方向
 * desc: 提供 `left`、`right`、`top`、`bottom` 四个方向，默认外边距，通过 `type` 可以设定为内边距。
 */

import React from 'react'
import { Text } from 'react-native'
import { Blank, Card, Space, Divider } from '@fruits-chain/react-native-xiaoshu'

const ctxStyle = { backgroundColor: '#f5f5f5' }
const blankStyle = { backgroundColor: '#098' }

const BasicBlankDirection: React.FC = () => {
  return (
    <Blank top bottom>
      <Space>
        <Card
          title="外边距"
          bodyPadding={false}
          bodyStyle={{ backgroundColor: '#158bb8' }}>
          <Blank style={blankStyle}>
            <Text style={ctxStyle}>默认状态:左右边距</Text>
          </Blank>

          <Divider>·</Divider>

          <Blank top bottom style={blankStyle}>
            <Text style={ctxStyle}>上下左右</Text>
          </Blank>
        </Card>

        <Card
          title="内边距"
          bodyPadding={false}
          bodyStyle={{ backgroundColor: '#158bb8' }}>
          <Blank style={blankStyle} type="padding">
            <Text style={ctxStyle}>默认状态:左右边距</Text>
          </Blank>

          <Divider>·</Divider>

          <Blank top bottom style={blankStyle} type="padding">
            <Text style={ctxStyle}>上下左右</Text>
          </Blank>
        </Card>
      </Space>
    </Blank>
  )
}

export default BasicBlankDirection
