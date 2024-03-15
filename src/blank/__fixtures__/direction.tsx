/**
 * title: 方向
 * description: 提供 `left`、`right`、`top`、`bottom` 四个方向，默认外边距，通过 `type` 可以设定为内边距。
 */

import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { Blank, Card, Space, Divider } from '@fruits-chain/react-native-xiaoshu'

const ctxStyle = { backgroundColor: '#f5f5f5' }
const cardBodyStyle = { backgroundColor: '#61649f' }
const blankStyle = { backgroundColor: '#098' }
const dividerStyle = { backgroundColor: '#2b333e' }

const BasicBlankDirection: React.FC = () => {
  return (
    <Blank top bottom>
      <Space>
        <Tip text="Card body" style={cardBodyStyle} />

        <Tip text="Blank" style={blankStyle} />

        <Tip text="Blank text" style={ctxStyle} />

        <Tip text="Divider" style={dividerStyle} />

        <Card title="外边距" bodyPadding={false} bodyStyle={cardBodyStyle}>
          <Blank style={blankStyle}>
            <Text style={ctxStyle}>默认状态:左右边距</Text>
          </Blank>

          <Divider style={dividerStyle}>·</Divider>

          <Blank top bottom style={blankStyle}>
            <Text style={ctxStyle}>上下左右</Text>
          </Blank>
        </Card>

        <Card title="内边距" bodyPadding={false} bodyStyle={cardBodyStyle}>
          <Blank style={blankStyle} type="padding">
            <Text style={ctxStyle}>默认状态:左右边距</Text>
          </Blank>

          <Divider style={dividerStyle}>·</Divider>

          <Blank top bottom style={blankStyle} type="padding">
            <Text style={ctxStyle}>上下左右</Text>
          </Blank>
        </Card>
      </Space>
    </Blank>
  )
}

const Tip = ({ text, style }: { text: string; style: ViewStyle }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{text}</Text>
      <View
        style={{
          width: 20,
          height: 20,
          marginLeft: 12,
          ...style,
        }}
      />
    </View>
  )
}

export default BasicBlankDirection
