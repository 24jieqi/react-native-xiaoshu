/**
 * title: 基础用法
 * description: 给指定内容添加文字。
 */

import React from 'react'
import { ScrollView, View } from 'react-native'

import { WaterMark, Blank, Space } from '@fruits-chain/react-native-xiaoshu'

const UploaderBase: React.FC = () => {
  return (
    <WaterMark text="仅用于案例展示" textWidth={90}>
      <ScrollView>
        <Blank>
          <Space>
            <View
              style={{
                height: 300,
                width: 200,
                alignSelf: 'center',
                backgroundColor: '#f30',
              }}
            />

            <View
              style={{
                height: 300,
                width: 200,
                alignSelf: 'center',
                backgroundColor: '#098',
              }}
            />

            <View
              style={{
                height: 300,
                width: 200,
                alignSelf: 'center',
                backgroundColor: '#678',
              }}
            />
          </Space>
        </Blank>
      </ScrollView>
    </WaterMark>
  )
}

export default UploaderBase
