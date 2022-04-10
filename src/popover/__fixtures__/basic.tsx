/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { Text, View } from 'react-native'

import { Popover } from '@fruits-chain/react-native-xiaoshu'

const BasicPopover: React.FC = () => {
  return (
    <ScrollView>
      <View style={{ height: 600 }}>
        <Popover
          overlay={
            <Popover.Item value="1">
              <Text>弹出</Text>
            </Popover.Item>
          }>
          <Text>啊哈哈哈</Text>
        </Popover>

        <View style={{ height: 600 }} />

        <Popover
          overlay={
            <Popover.Item value="1">
              <Text>弹出</Text>
            </Popover.Item>
          }>
          <Text>啊哈哈哈</Text>
        </Popover>
      </View>
    </ScrollView>
  )
}

export default BasicPopover
