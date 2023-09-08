import React from 'react'

import { attachPropertiesToComponent } from '../helpers'
import Portal from '../portal'

import FloatingPanel from './floating-panel'
import FloatingPanelScrollView from './floating-panel-scroll-view'
import type { FloatingPanelProps } from './interface'

const FloatingPanelContainer: React.FC<FloatingPanelProps> = props => {
  return (
    <Portal>
      <FloatingPanel {...props} />
    </Portal>
  )
}

const FloatingPanelScrollViewContainer: React.FC<
  FloatingPanelProps
> = props => {
  return (
    <Portal>
      <FloatingPanelScrollView {...props} />
    </Portal>
  )
}

export default attachPropertiesToComponent(FloatingPanelContainer, {
  Component: FloatingPanel,
  ScrollView: FloatingPanelScrollViewContainer,
  ScrollViewComponent: FloatingPanelScrollView,
})
