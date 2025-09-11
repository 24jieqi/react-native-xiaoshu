/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, Text } from 'react-native'

import { Steps, Cell, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicDemo: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <Steps
          data={[
            { title: '基本信息' },
            { title: '生产任务啦啦' },
            { title: '生产2啦' },
          ]}
          current={1}
        />

        <Steps
          data={[{ title: '基本信息' }, { title: '生产任务啦啦' }]}
          current={1}
        />

        <Steps
          data={[
            { title: '基本信息' },
            { title: '生产任务啦啦' },
            { title: '发布任务' },
          ]}
          current={0}
        />

        <Cell.Group title="自定义 icon">
          <Steps
            data={[
              { title: '基本信息', icon: <Text>x</Text> },
              { title: '生产任务啦啦', icon: <Text>🪝</Text> },
              { title: '发布任务' },
            ]}
            current={0}
          />
        </Cell.Group>

        <Cell.Group title="多步骤时">
          <Steps
            data={[
              { title: '基本信息' },
              { title: '生产任务啦啦' },
              { title: '发布任务' },
              { title: '发布任务1' },
              { title: '发布任务2' },
              { title: '发布任务4' },
            ]}
            current={3}
          />
        </Cell.Group>
      </Space>
    </ScrollView>
  )
}

export default BasicDemo
