/**
 * title: Header
 * description: 适用于各种弹出层头部。
 */

import React from 'react'
import { Text } from 'react-native'

import { Blank, Space, Popup } from '@fruits-chain/react-native-xiaoshu'

const BasicPopupHeader: React.FC = () => {
  return (
    <Blank top>
      <Space>
        <Popup.Header
          title="标题"
          onClose={() => {
            console.log('标题:onClose')
          }}
        />

        <Popup.Header title="纯标题" showClose={false} />

        <Popup.Header
          title="左右拓展"
          leftExtra={<Text>leftExtra</Text>}
          rightExtra={<Text>rightExtra</Text>}
          onClose={() => {
            console.log('左右拓展:onClose')
          }}
        />
      </Space>
    </Blank>
  )
}

export default BasicPopupHeader
