import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Steps } from 'react-native-xiaoshu'

const BasicDemo: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Steps
        data={[
          { title: '基本信息' },
          { title: '生产任务啦啦' },
          { title: '生产2啦' },
        ]}
        current={1}
      />
      <View style={{ height: 20 }} />
      <Steps
        data={[
          { title: '基本信息' },
          { title: '生产任务啦啦' },
          { title: '发布任务' },
        ]}
        current={0}
      />
      <Text>自定义icon</Text>
      <Steps
        data={[
          { title: '基本信息', icon: <Text>x</Text> },
          { title: '生产任务啦啦', icon: <Text>🪝</Text> },
          { title: '发布任务' },
        ]}
        current={0}
      />
      <Text>多步骤时</Text>
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
    </ScrollView>
  )
}

export default BasicDemo
