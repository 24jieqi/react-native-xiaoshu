/**
 * title: 基础用法
 * desc: 可以传入一个 buttons 按钮数组，也可以嵌套子元素。
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { Blank, Button, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicButtonBar: React.FC = () => {
  return (
    <ScrollView>
      <Blank top bottom>
        <Space gap="l">
          <Button type="primary">123</Button>
          <Button type="primary">456</Button>
        </Space>

        <Blank top left={false} right={false}>
          <Button type="primary">789</Button>
        </Blank>
      </Blank>

      <Blank>
        <Button type="primary">789</Button>
      </Blank>
    </ScrollView>
  )
}

export default BasicButtonBar
