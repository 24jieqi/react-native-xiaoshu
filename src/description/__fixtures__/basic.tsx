/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Space } from '@fruits-chain/react-native-xiaoshu'

import DescriptionBase from './base'
import DescriptionSize from './size'
import DescriptionOther from './other'

const BasicDialog: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <DescriptionBase />

        <DescriptionSize />

        <DescriptionOther />
      </Space>
    </ScrollView>
  )
}

export default BasicDialog
