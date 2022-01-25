/**
 * title: 基础用法
 * desc: 通过函数调用，返回一个 Promise。
 */

import React from 'react'
import { Text } from 'react-native'
import { Badge, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

import BadgeDemoItem from './component/item'

const BadgeBase: React.FC = () => {
  return (
    <>
      <CellGroup title="包裹子组件" bodyPaddingHorizontal>
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
      </CellGroup>

      <CellGroup title="最大值" bodyPaddingHorizontal>
        <Space direction="horizontal">
          <Badge count={999} max={99}>
            <BadgeDemoItem />
          </Badge>

          <Badge count={9} max={99}>
            <BadgeDemoItem />
          </Badge>
        </Space>
      </CellGroup>

      <CellGroup title="自定义偏移" bodyPaddingHorizontal>
        <Space direction="horizontal">
          <Badge count={9} offset={[8, -16]}>
            <BadgeDemoItem />
          </Badge>

          <Badge dot offset={[8, -16]}>
            <BadgeDemoItem />
          </Badge>
        </Space>
      </CellGroup>

      <CellGroup title="独立展示" bodyPaddingHorizontal>
        <Space direction="horizontal" align="center" tail>
          <Badge count="新+" />
          <Badge count={999} />
          <Badge count={999} max={9} />
          <Badge dot />
        </Space>

        <Space size={0}>
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
      </CellGroup>
    </>
  )
}

export default BadgeBase
