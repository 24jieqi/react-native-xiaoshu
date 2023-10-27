/**
 * title: 大小
 * desc: 直接修改 `left`、`right`、`top`、`bottom` 属性，或使用内置的 `size` 统一设置边距大小。
 */

import React from 'react'
import { Text, View } from 'react-native'
import { Blank, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const ctxStyle = { backgroundColor: '#f5f5f5' }
const blankStyle = { backgroundColor: '#098' }

const BasicBlankSize: React.FC = () => {
  return (
    <Blank top bottom>
      <Space>
        <Card
          title="直接修改"
          bodyPadding={false}
          bodyStyle={{ backgroundColor: '#158bb8' }}>
          <Blank style={blankStyle} left={4} top={8} right={12} bottom={20}>
            <Text style={ctxStyle}>
              {`left={4} top={8} right={12} bottom={20}`}
            </Text>
          </Blank>
        </Card>

        <Card
          title="内置 size"
          bodyPadding={false}
          bodyStyle={{ backgroundColor: '#158bb8' }}>
          <Blank top bottom style={blankStyle} size="s">
            <Text style={ctxStyle}>size="s"</Text>
          </Blank>

          <View style={{ height: 1, backgroundColor: '#fff' }} />

          <Blank top bottom style={blankStyle} size="m">
            <Text style={ctxStyle}>size="m"</Text>
          </Blank>

          <View style={{ height: 1, backgroundColor: '#fff' }} />

          <Blank top bottom style={blankStyle} size="l">
            <Text style={ctxStyle}>size="l"</Text>
          </Blank>
        </Card>
      </Space>
    </Blank>
  )
}

export default BasicBlankSize
