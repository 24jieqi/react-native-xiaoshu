/**
 * title: 基础用法
 * desc: left、right、top、bottom 四个方向，可以独立设置具体的边距，也可以通过 size 修改默认大小。
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

        <Blank top left={false} right={32}>
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
