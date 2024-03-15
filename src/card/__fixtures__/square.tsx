/**
 * title: 直角卡片
 * description: 包含标题、内容、操作区域。
 */

import React from 'react'
import { Text } from 'react-native'
import { Card, Button, Space, Blank } from '@fruits-chain/react-native-xiaoshu'

const CardSquare: React.FC = () => {
  return (
    <Blank>
      <Space head>
        <Card
          square
          title="Default card"
          extra={<Button type="link" text="More" />}>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card
          square
          title="Default card"
          extra={<Button type="link" text="More" />}>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>
      </Space>
    </Blank>
  )
}

export default CardSquare
