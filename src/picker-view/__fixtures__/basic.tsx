/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import PickerViewCascade from './cascade'
import PickerViewMultiple from './multiple'
import PickerViewSingle from './single'

const BasicMultiple: React.FC = () => {
  return (
    <ScrollView>
      <PickerViewSingle />

      <PickerViewMultiple />

      <PickerViewCascade />
    </ScrollView>
  )
}

export default BasicMultiple
