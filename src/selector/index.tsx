import React, { memo } from 'react'

import Portal from '../portal'

import type { SelectorInstance } from './interface'
import SelectorBase from './selector'
import SelectorFn from './selector-fn'
import SelectorText from './text'

const Selector: SelectorInstance = opt => SelectorFn(opt)

Selector.Component = memo(props => {
  return (
    <Portal>
      <SelectorBase {...props} />
    </Portal>
  )
})

Selector.Text = SelectorText

export default Selector
