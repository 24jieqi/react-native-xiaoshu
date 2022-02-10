import React, { memo } from 'react'

import Portal from '../portal'

import type { PickerInstance } from './interface'
import PickerView from './picker'
import PickerMethodView from './picker-method'

/**
 * 选择器
 */
const Picker: PickerInstance = opts => {
  return new Promise(resolve => {
    const key = Portal.add(
      <PickerMethodView
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

Picker.Component = memo(props => {
  return (
    <Portal>
      <PickerView {...props} />
    </Portal>
  )
})

export default Picker
