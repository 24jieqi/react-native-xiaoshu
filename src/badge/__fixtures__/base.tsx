/**
 * title: 基础用法
 * description: 包裹子组件或独立使用。
 */

import React from 'react'
import { Text } from 'react-native'
import { Badge, Card, Space } from '@fruits-chain/react-native-xiaoshu'

import BadgeDemoItem from './component/item'

const BadgeBase: React.FC = () => {
  return (
    <Space>
      <Card title="包裹子组件" square>
        <Space direction="horizontal">
          <Badge count="999">
            <BadgeDemoItem />
          </Badge>

          <Badge dot>
            <BadgeDemoItem />
          </Badge>

          <Badge count="999" loading>
            <BadgeDemoItem />
          </Badge>

          <Badge count={0} showZero>
            <BadgeDemoItem />
          </Badge>
        </Space>
      </Card>

      <Card title="最大值" square>
        <Space direction="horizontal">
          <Badge count={999} max={99}>
            <BadgeDemoItem />
          </Badge>

          <Badge count={9} max={99}>
            <BadgeDemoItem />
          </Badge>
        </Space>
      </Card>

      <Card title="自定义偏移" square>
        <Space direction="horizontal">
          <Badge count={9} offset={[8, -16]}>
            <BadgeDemoItem />
          </Badge>

          <Badge dot offset={[8, -16]}>
            <BadgeDemoItem />
          </Badge>
        </Space>
      </Card>

      <Card title="独立展示" square>
        <Space direction="horizontal" align="center" tail>
          <Badge count="新+" />
          <Badge count={999} />
          <Badge count={999} max={9} />
          <Badge dot />
        </Space>

        <Space gap={0}>
          <Space direction="horizontal" align="center">
            <Badge count="新+" />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center">
            <Badge count={999} />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center">
            <Badge count={999} max={9} />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center">
            <Badge dot />
            <Text>一段描述</Text>
          </Space>
        </Space>
      </Card>
    </Space>
  )
}

export default BadgeBase
