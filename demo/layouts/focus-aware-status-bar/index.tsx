import React, { memo } from 'react'
import type { StatusBarProps } from 'react-native'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocusAwareStatusBar: React.FC<StatusBarProps> = props => {
  const isFocused = useIsFocused()

  return isFocused ? (
    <StatusBar {...props} backgroundColor="transparent" translucent />
  ) : null
}

export default memo(FocusAwareStatusBar)
