/**
 * title: 预加载的卡片
 * description: 数据读入前会有文本块样式。
 */

import React from 'react'
import { Text } from 'react-native'
import { Card, Button, Space, Blank } from '@fruits-chain/react-native-xiaoshu'

const CardLoading: React.FC = () => {
  return (
    <Blank>
      <Space head>
        <Card loading>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>
        <Card loading extra={<Button type="link" text="More" />}>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>
        <Card
          loading
          title="Default card"
          extra={<Button type="link" text="More" />}>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>
        <Card
          loading
          title="Default card"
          extra={<Button type="link" text="More" />}
          footer="Default card Default card">
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>
      </Space>
    </Blank>
  )
}

export default CardLoading
