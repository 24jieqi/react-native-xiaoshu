import React from 'react'

import Portal from '../portal'

import type { StepSelectorMethodProps, StepSelectorProps } from './interface'
import StepSelector from './step-selector'
import StopSelectorMethod from './step-selector-method'

export const Instance = <T,>(opts: StepSelectorMethodProps<T>) => {
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
          reject(new Error())
        }}
      />,
    )
  })
}

export const Component = <T = number,>(props: StepSelectorProps<T>) => {
  return (
    <Portal>
      <StepSelector<T> {...props} />
    </Portal>
  )
}

export const StepSelectorComponent = StepSelector
