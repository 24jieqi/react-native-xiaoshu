import React from 'react'

import { attachPropertiesToComponent } from '../helpers'
import Portal from '../portal'

import type { SelectorProps } from './interface'
import Selector from './selector'
import SelectorInstance from './selector-instance'
import SelectorText from './selector-text'
import { varCreator } from './style'

const Component: React.FC<SelectorProps> = props => {
  return (
    <Portal>
      <Selector {...props} />
    </Portal>
  )
}

export default attachPropertiesToComponent(SelectorInstance, {
  varCreator,
  Component,
  SelectorComponent: Selector,
  Text: SelectorText,
})
