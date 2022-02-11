/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView, View } from 'react-native'

import { Sidebar, Space } from '@fruits-chain/react-native-xiaoshu'

const nullArray = []

const options = [
  {
    value: 1,
    label: '洞房第',
  },
  {
    value: 2,
    label: '洞房第三方的离开',
  },
  {
    value: 3,
    label: '洞房',
  },
  {
    value: 4,
    label: '发生大幅度',
    disabled: true,
  },
]

const options2 = [
  {
    value: 1,
    label: '洞房第',
    badge: {
      count: 1,
    },
  },
  {
    value: 2,
    label: '洞房第三方的离开',
    badge: {
      count: 99,
    },
  },
  {
    value: 3,
    label: '洞房',
    badge: {
      count: 99,
      max: 9,
    },
  },
  {
    value: 4,
    label: '发生大幅度',
    badge: {
      count: '新',
    },
  },
  {
    value: 5,
    label: '东方闪电',
    badge: {
      dot: true,
    },
  },
  {
    value: 6,
    label: '东是电',
  },
  {
    value: 7,
    label: '防守打法',
  },
  {
    value: 8,
    label: '东方',
  },
]

const BasicSidebar: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Space>
        <View style={{ height: 300 }}>
          <Sidebar options={nullArray} />
        </View>

        <View style={{ height: 300 }}>
          <Sidebar options={nullArray} loading />
        </View>

        <View style={{ height: 300 }}>
          <Sidebar options={options} defaultActiveValue={options[1].value} />
        </View>

        <View style={{ height: 300 }}>
          <Sidebar options={options2} defaultActiveValue={options2[1].value} />
        </View>
      </Space>
    </ScrollView>
  )
}

export default BasicSidebar
