/**
 * title: 多彩徽标
 * desc: 我们添加了多种预设色彩的徽标样式，用作不同场景使用。
 */

import React from 'react'
import { Text } from 'react-native'
import { Badge, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

import BadgeDemoItem from './component/item'

const BadgeStatus: React.FC = () => {
  return (
    <>
      <CellGroup title="内置颜色" bodyPaddingHorizontal>
        <Space direction="horizontal">
          <Badge count={99} status="primary">
            <BadgeDemoItem />
          </Badge>

          <Badge dot status="error">
            <BadgeDemoItem />
          </Badge>

          <Badge dot status="success">
            <BadgeDemoItem />
          </Badge>

          <Badge dot status="warning">
            <BadgeDemoItem />
          </Badge>
        </Space>
      </CellGroup>
      <CellGroup title="自定义颜色" bodyPaddingHorizontal>
        <Space direction="horizontal">
          <Badge count={99} color="#987">
            <BadgeDemoItem />
          </Badge>

          <Badge dot color="#472">
            <BadgeDemoItem />
          </Badge>

          <Badge dot color="#937">
            <BadgeDemoItem />
          </Badge>
        </Space>
      </CellGroup>
      <CellGroup title="组合使用" bodyPaddingHorizontal>
        <Space gap={0}>
          <Space direction="horizontal" align="center" gap={4}>
            <Badge dot status="primary" />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center" gap={4}>
            <Badge dot status="success" />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center" gap={4}>
            <Badge dot status="warning" />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center" gap={4}>
            <Badge dot status="error" />
            <Text>一段描述</Text>
          </Space>
          <Space direction="horizontal" align="center" gap={4}>
            <Badge dot color="#000" />
            <Text>一段描述</Text>
          </Space>
        </Space>
      </CellGroup>
    </>
  )
}

export default BadgeStatus
