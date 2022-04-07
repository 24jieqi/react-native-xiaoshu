import React, { memo } from 'react'

import Portal from '../portal'

import type { StepSelectorInstance, StepSelectorMethodProps } from './interface'
import StepSelectorView from './step-selector'
import StopSelectorMethod from './step-selector-method'

/**
 * 步骤选择
 */
const StepSelector: StepSelectorInstance = <T,>(
  opts: StepSelectorMethodProps<T>,
) => {
  return new Promise<T[]>(resolve => {
    const key = Portal.add(
      <StopSelectorMethod<T>
        {...opts}
        onClosed={() => {
          Portal.remove(key)
          opts.onClosed?.()
        }}
        callback={(v, o, isEnd) => {
          opts.callback?.(v, o, isEnd)
          resolve(v)
        }}
      />,
    )
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
