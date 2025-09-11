/**
 * title: 自定义
 * description: 根据自身需求自定义组件。
 */
import { ArrowLeftOutline } from '@fruits-chain/icons-react-native'
import React from 'react'
import { Text, View } from 'react-native'

import { Button, Flex, Result, Space } from '@fruits-chain/react-native-xiaoshu'

const ResultCustom = () => {
  return (
    <Space>
      <Result
        status="info"
        title="自定义图标"
        renderIcon={(color, size) => {
          return <ArrowLeftOutline color={color} size={size} />
        }}
      />

      <Result
        status="error"
        subtitle={
          <Flex direction="row" align="center" justify="center">
            <Text>还没有，请</Text>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ color: '#098', marginLeft: 2 }}
              suppressHighlighting={false}
              onPress={() => {
                console.log('434')
              }}>
              添加元素
            </Text>
          </Flex>
        }
      />

      <Result
        status="warning"
        subtitle="空白数据"
        extra={
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{ paddingHorizontal: 64 }}>
            <Button type="primary" text="返回主页" />
          </View>
        }
      />
    </Space>
  )
}

export default ResultCustom
