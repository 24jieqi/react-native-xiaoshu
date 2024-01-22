import React from 'react'
import { ScrollView } from 'react-native'

import EmptyBase from './base'
import EmptyIcon from './icon'
import EmptyCustom from './custom'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <EmptyBase />
      <EmptyIcon />
      <EmptyCustom />
    </ScrollView>
  )
}

export default BasicTag
