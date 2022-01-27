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
