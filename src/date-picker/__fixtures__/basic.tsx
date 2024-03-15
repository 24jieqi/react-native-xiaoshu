/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Space, Blank } from '@fruits-chain/react-native-xiaoshu'

import DatePickerViewSingle from './single'
import DatePickerViewRangeView from './range-view'
import DatePickerViewRange from './range'

const BasicDatePickerView: React.FC = () => {
  return (
    <ScrollView>
      <Blank>
        <Space tail head>
          <DatePickerViewSingle />

          <DatePickerViewRangeView />

          <DatePickerViewRange />
        </Space>
      </Blank>
    </ScrollView>
  )
}

export default BasicDatePickerView
