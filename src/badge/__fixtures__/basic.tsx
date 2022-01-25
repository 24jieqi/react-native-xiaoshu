import React from 'react'
import { ScrollView } from 'react-native'

import BadgeBase from './base'
import BadgeStatus from './status'

const BasicBadge: React.FC = () => {
  return (
    <ScrollView>
      <BadgeBase />
      <BadgeStatus />
    </ScrollView>
  )
}

export default BasicBadge
