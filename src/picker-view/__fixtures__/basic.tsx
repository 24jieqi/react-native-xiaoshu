/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import PickerViewSingle from './single'
import PickerViewMultiple from './multiple'
import PickerViewCascade from './cascade'

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
