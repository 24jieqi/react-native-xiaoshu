/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import { Empty, Card, Space, Flex } from '@fruits-chain/react-native-xiaoshu'
import { ArrowDownOutline } from '@fruits-chain/icons-react-native'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <Card title="基础用法" square>
          <Empty />
        </Card>

        <Card title="自定义文案" square>
          <Empty text="真的没有啦~" />
        </Card>

        <Card title="自定义文案2" square>
          <Empty
            text={
              <Flex direction="row" align="center">
                <Text>还没有，请</Text>
                <Text
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
        </Card>

        <Card title="自定义图标" square>
          <Empty text="一二三" icon={<ArrowDownOutline />} />
        </Card>

        <View style={{ height: 500, backgroundColor: '#f5f5f5' }}>
          <Empty text="占满剩余空间 full" full />
        </View>
      </Space>
    </ScrollView>
  )
}

export default BasicTag
