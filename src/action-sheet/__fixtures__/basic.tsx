import React from 'react'
import { ScrollView } from 'react-native'

import ActionSheetBase from './base'
import ActionSheetComponent from './component'

const BasicActionSheet: React.FC = () => {
  return (
    <ScrollView>
      <ActionSheetBase />
      <ActionSheetComponent />
    </ScrollView>
  )
}

export default BasicActionSheet
