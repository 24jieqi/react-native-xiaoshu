/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native'

import { Popover, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicPopover: React.FC = () => {
  return (
    <ScrollView>
      <Space gap={100} tail>
        <Popover<string>
          triggerStyle={{ backgroundColor: '#f30' }}
          arrowStyle={{ borderTopColor: '#000' }}
          contentStyle={{ backgroundColor: '#000' }}
          duration={0}
          onSelect={v => {
            console.log('onSelect == > ', v)
          }}
          overlay={[
            <Popover.Item key="1" value="1">
              <Text style={{ color: '#fff' }}>弹出1</Text>
            </Popover.Item>,
            <Popover.Item key="2" value="2">
              <Text style={{ color: '#fff' }}>弹出2</Text>
            </Popover.Item>,
            <Popover.Item key="3" value="3">
              <Text style={{ color: '#fff' }}>弹出3</Text>
            </Popover.Item>,
          ]}>
          <Text>啊哈哈哈</Text>
        </Popover>

        <Popover
          dark
          placement="bottom"
          overlay={
            <Popover.Item value="1">
              <Text style={{ color: '#fff' }}>弹出</Text>
            </Popover.Item>
          }>
          <Text>啊哈哈哈</Text>
        </Popover>

        <Popover
          dark
          overlay={<Popover.Text text="哈哈哈 dark" />}
          onSelect={e => {
            console.log(e)
          }}>
          <Text>啊哈哈哈 dark</Text>
        </Popover>

        <Popover
          overlay={<Popover.Text text="哈哈哈 not dark" />}
          onSelect={e => {
            console.log(e)
          }}>
          <Text>啊哈哈哈 not dark</Text>
        </Popover>
      </Space>
    </ScrollView>
  )
}

export default BasicPopover
