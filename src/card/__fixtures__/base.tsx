/**
 * title: 经典卡片
 * desc: 包含标题、内容、操作区域。
 */

import React from 'react'
import { Text } from 'react-native'
import { Card, Space, Button, Tag } from '@fruits-chain/react-native-xiaoshu'

const CardBase: React.FC = () => {
  return (
    <Space head>
      <Card title="Default card" extra={<Button type="link" text="More" />}>
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>

      <Card
        title="Default card"
        titleLeftExtra={<Tag>标签</Tag>}
        extra={<Button type="link" text="More" />}>
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>

      <Card
        size="s"
        title="s card s card s card s card s card"
        titleLeftExtra={<Tag>标签</Tag>}
        extra={<Button type="link" text="More" />}>
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>

      <Card
        title="Default card"
        footer="Default card Default card Default card Default card Default card Default card Default card">
        <Text>Card content</Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>
    </Space>
  )
}

export default CardBase
