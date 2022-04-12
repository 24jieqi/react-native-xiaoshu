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
  return new Promise<T[]>((resolve, reject) => {
    const key = Portal.add(
      <StopSelectorMethod<T>
        {...opts}
        onClosed={() => {
          Portal.remove(key)
          opts.onClosed?.()
        }}
        onConfirm={(v, o, isEnd) => {
          opts.onConfirm?.(v, o, isEnd)
          resolve(v)
        }}
        onCancel={() => {
          opts.onCancel?.()
          reject(new Error('取消选择'))
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
