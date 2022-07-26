import React, { useRef, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'

import type { TabViewProps } from './interface'

const activeStyle: ViewStyle = { flex: 1 }
const inactiveStyle: ViewStyle = { flex: 1, display: 'none' }

const TabView: React.FC<TabViewProps> = ({
  children,
  active,
  lazyRender = true,
}) => {
  const Activated = useRef(!lazyRender)

  if (active) {
    Activated.current = true
  }

  return (
    <View style={active ? activeStyle : inactiveStyle}>
      {Activated.current ? children : null}
    </View>
  )
}

export default memo(TabView)
