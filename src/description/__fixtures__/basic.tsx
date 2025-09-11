/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Space } from '@fruits-chain/react-native-xiaoshu'

import DescriptionBase from './base'
import DescriptionEmpty from './empty'
import DescriptionOther from './other'
import DescriptionSize from './size'

const BasicDialog: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <DescriptionBase />

        <DescriptionSize />

        <DescriptionOther />

        <DescriptionEmpty />
      </Space>
    </ScrollView>
  )
}

export default BasicDialog
