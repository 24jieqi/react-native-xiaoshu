/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, View } from 'react-native'

import { Empty, Card, Space } from '@fruits-chain/react-native-xiaoshu'
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
