/**
 * title: 大小
 * description: 直接修改 `left`、`right`、`top`、`bottom` 属性，或使用内置的 `size` 统一设置边距大小。
 */

import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { Blank, Card, Space, Divider } from '@fruits-chain/react-native-xiaoshu'

const ctxStyle = { backgroundColor: '#f5f5f5' }
const cardBodyStyle = { backgroundColor: '#61649f' }
const blankStyle = { backgroundColor: '#098' }
const dividerStyle = { backgroundColor: '#2b333e' }

const BasicBlankSize: React.FC = () => {
  return (
    <Blank top bottom>
      <Space>
        <Tip text="Card body" style={cardBodyStyle} />

        <Tip text="Blank" style={blankStyle} />

        <Tip text="Blank text" style={ctxStyle} />

        <Tip text="Divider" style={dividerStyle} />

        <Card title="直接修改" bodyPadding={false} bodyStyle={cardBodyStyle}>
          <Blank style={blankStyle} left={4} top={8} right={12} bottom={20}>
            <Text style={ctxStyle}>
              {`left={4} top={8} right={12} bottom={20}`}
            </Text>
          </Blank>
        </Card>

        <Card title="内置 size" bodyPadding={false} bodyStyle={cardBodyStyle}>
          <Blank top bottom style={blankStyle} size="s">
            <Text style={ctxStyle}>size="s"</Text>
          </Blank>

          <Divider style={dividerStyle}>·</Divider>

          <Blank top bottom style={blankStyle} size="m">
            <Text style={ctxStyle}>size="m"</Text>
          </Blank>

          <Divider style={dividerStyle}>·</Divider>

          <Blank top bottom style={blankStyle} size="l">
            <Text style={ctxStyle}>size="l"</Text>
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

export default BasicBlankSize
