/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { Space } from '@fruits-chain/react-native-xiaoshu'

import CheckboxIcon from './icon'
import CheckboxBase from './base'
import CheckboxGroup from './group'

const BasicCheckbox: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <CheckboxIcon />

        <CheckboxBase />

        <CheckboxGroup />
      </Space>
    </ScrollView>
  )
}

export default BasicCheckbox
