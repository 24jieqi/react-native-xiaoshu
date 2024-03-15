/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Flex, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const Circle = (props: { size?: number }) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <View style={style} />
}

const BasicFlex: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <Card title="项目的排列方向" square>
          <Space>
            <Text>direction="row":主轴为水平方向，起点在左端</Text>

            <Flex>
              <Flex.Item style={{ paddingRight: 4 }}>
                <Button size="xs">按钮1</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                <Button size="xs">按钮2</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingLeft: 4 }}>
                <Button size="xs">按钮3</Button>
              </Flex.Item>
            </Flex>

            <Text>direction="column":主轴为垂直方向，起点在上沿</Text>

            <Flex direction="column">
              <Flex.Item style={{ paddingBottom: 4 }}>
                <Button size="xs">按钮1</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingBottom: 4 }}>
                <Button size="xs">按钮2</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingBottom: 4 }}>
                <Button size="xs">按钮3</Button>
              </Flex.Item>
            </Flex>
          </Space>
        </Card>

        <Card title="对齐方式" square>
          <Space>
            <Text>justify="start":左对齐</Text>
            <Flex justify="start">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Flex>

            <Text>justify="center":居中</Text>

            <Flex justify="center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Flex>

            <Text>justify="end":右对齐</Text>

            <Flex justify="end">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Flex>
          </Space>
        </Card>

        <Card title="组合使用" square>
          <Flex justify="between">
            <Circle />

            <Flex align="center">
              <Circle />
              <Circle size={40} />
            </Flex>
          </Flex>
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicFlex
