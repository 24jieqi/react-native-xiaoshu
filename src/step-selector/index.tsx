import React, { memo } from 'react'

import Portal from '../portal'

import type { StepSelectorInstance } from './interface'
import StepSelectorView from './step-selector'

/**
 * 步骤选择
 */
const StepSelector: StepSelectorInstance = opts => {
  return new Promise(resolve => {
    const key = Portal.add(
      null,
      // <DialogMethodView
      //   {...opts}
      //   onClosed={() => {
      //     Portal.remove(key)
      //     opts.onClosed?.()
      //   }}
      //   callback={action => {
      //     resolve(action)
      //   }}
      // />,
    )
    console.log(key)
  })
}

StepSelector.Component = memo(props => {
  return (
    <Portal>
      <StepSelectorView {...props} />
    </Portal>
  )
})

export default StepSelector
