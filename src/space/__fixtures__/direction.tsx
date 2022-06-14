/**
 * title: 排版方向
 * desc: 组件 `direction` 属性可以改变子组件排版方向，横向排版子组件太多可以通过 `wrap` 达到换行的效果。
 */

import React from 'react'
import { Text } from 'react-native'

import { Blank, Card, Space, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicSpaceDirection: React.FC = () => {
  return (
    <Blank top>
      <Space>
        <Card title="方向:vertical">
          <Space>
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="方向:horizontal">
          <Space direction="horizontal">
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="方向:horizontal:子组件过多">
          <Text>
            Space
            每个子元素自带下边距，如果业务中不需要下边距只要左右的，可以通过
            gapVertical 消除。
          </Text>
          <Space direction="horizontal" gapVertical={0}>
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="方向:horizontal:wrap" bodyPadding={{ bottom: false }}>
          <Text>多行的情况下边距不好消除，只好通过父节点去掉多余的边距</Text>

          <Space gap="m" direction="horizontal" wrap>
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>
      </Space>
    </Blank>
  )
}

export default BasicSpaceDirection
