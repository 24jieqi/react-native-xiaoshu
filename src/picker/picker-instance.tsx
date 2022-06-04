import React from 'react'

import type { PickerValue, Column } from '../picker-view/interface'
import Portal from '../portal'

import type { PickerProps, PickerMethodProps, PickerAction } from './interface'
import Picker from './picker'
import PickerMethod from './picker-method'

/**
 * 选择器
 */
export const Instance = (opts: PickerMethodProps) => {
  return new Promise<{
    action: PickerAction
    values: PickerValue[]
    columns: Column[]
  }>(resolve => {
    const key = Portal.add(
      <PickerMethod
        {...opts}
        onCancel={(v, c) => {
          opts.onCancel?.(v, c)
          resolve({
            action: 'cancel',
            values: v,
            columns: c,
          })
        }}
        onConfirm={(v, c) => {
          opts.onConfirm?.(v, c)
          resolve({
            action: 'confirm',
            values: v,
            columns: c,
          })
        }}
        onPressOverlay={(v, c) => {
          opts.onPressOverlay?.(v, c)
          resolve({
            action: 'overlay',
            values: v,
            columns: c,
          })
        }}
        onClosed={() => {
          opts.onClosed?.()
          Portal.remove(key)
        }}
      />,
    )
  })
}

export const Component: React.FC<PickerProps> = props => {
  return (
    <Portal>
      <Picker {...props} />
    </Portal>
  )
}

export const PickerComponent = Picker
