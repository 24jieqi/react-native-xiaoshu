import React from 'react'

import { attachPropertiesToComponent } from '../helpers'
import Portal from '../portal'

import type { SelectorProps } from './interface'
import Selector from './selector'
import SelectorInstance from './selector-instance'
import SelectorText from './selector-text'
import { varCreator, styleCreator } from './style'

const Component: React.FC<SelectorProps> = props => {
  return (
    <Portal>
      <Selector {...props} />
    </Portal>
  )
}

export default attachPropertiesToComponent(SelectorInstance, {
  varCreator,
  styleCreator,
  Component,
  SelectorComponent: Selector,
  Text: SelectorText,
})
