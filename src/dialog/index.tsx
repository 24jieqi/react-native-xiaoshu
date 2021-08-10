import React, { memo } from 'react'

import Portal from '../portal'
import type { DialogInstance } from './interface'
import DialogView from './dialog'
import DialogMethodView from './dialog-method'
import DialogInputView from './dialog-input'

/**
 * 对话框
 */
const Dialog: DialogInstance = opts => {
  return new Promise(resolve => {
    const key = Portal.add(
      <DialogMethodView
        {...opts}
        onClosed={() => {
          Portal.remove(key)

          opts.onClosed && opts.onClosed()
        }}
        callback={action => {
          resolve(action)
        }}
      />,
    )
  })
}

Dialog.Component = memo(props => {
  return (
    <Portal>
      <DialogView {...props} />
    </Portal>
  )
})

Dialog.confirm = options => {
  return Dialog({
    showCancelButton: true,
    ...options,
  })
}

Dialog.input = opts => {
  const key = Portal.add(
    <DialogInputView
      {...opts}
      onClosed={() => {
        Portal.remove(key)
        opts.onClosed && opts.onClosed()
      }}
    />,
  )
}

export default Dialog
