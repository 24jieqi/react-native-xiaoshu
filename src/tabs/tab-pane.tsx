import type React from 'react'
import { memo } from 'react'

import type { TabPaneProps } from './interface'

const TabPane: React.FC<TabPaneProps> = ({ children }) => {
  return children as React.ReactElement
}

export default memo(TabPane)
