/**
 * title: 经典卡片
 * description: 包含标题、内容、操作区域。
 */

import React from 'react'
import { Text } from 'react-native'
import {
  Card,
  Space,
  Button,
  Tag,
  Blank,
} from '@fruits-chain/react-native-xiaoshu'

const CardBase: React.FC = () => {
  return (
    <Blank>
      <Space head>
        <Card>
          <Text>卡片无标题</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card extra={<Button type="link" text="More" />}>
          <Text>卡片无标题，有自定义标题扩展</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card title="Default card" extra={<Button type="link" text="More" />}>
          <Text>卡片有标题，有自定义标题扩展</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card
          title="Default card"
          titleLeftExtra={<Tag>标签1</Tag>}
          extra={<Button type="link" text="More" />}>
          <Text>卡片有标题，有自定义标题扩展，有左侧自定义扩展</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card
          size="s"
          title="s card s card s card s card s card"
          titleLeftExtra={<Tag>标签2</Tag>}
          extra={<Button type="link" text="More" />}>
          <Text>s 尺寸的圆角、标题文字大小</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card
          title="Default card"
          footer="Default card Default card Default card Default card Default card Default card Default card">
          <Text>自定义 footer</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card title="title" bodyPadding={false}>
          <Text>内容区域无内边距</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card title="title" bodyPadding={32}>
          <Text>自定义内容区域内边距 {`bodyPadding={32}`}</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card title="title" bodyPadding={{ top: true, bottom: 32 }}>
          <Text>
            自定义内容区域内边距 {`bodyPadding={{ top: true, bottom: 32 }}`}
          </Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>

        <Card
          title="title"
          bodyPadding={{ top: true, bottom: 32 }}
          bodyStyle={{
            paddingVertical: 40,
          }}>
          <Text>
            自定义内容区域样式 {`bodyStyle={{ paddingVertical: 40 }}`}
          </Text>
          <Text>
            自定义内容区域内边距 {`bodyPadding={{ top: true, bottom: 32 }}`}
          </Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
          <Text>Card content</Text>
        </Card>
      </Space>
    </Blank>
  )
}

export default CardBase
