import React, { memo } from 'react'

import Portal from '../portal'

import DialogView from './dialog'
import DialogInputView from './dialog-input'
import DialogKeyboardView from './dialog-keyboard'
import DialogMethodView from './dialog-method'
import type { DialogInstance } from './interface'

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

          opts.onClosed?.()
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

Dialog.Keyboard = memo(props => {
  return (
    <Portal>
      <DialogKeyboardView {...props} />
    </Portal>
  )
})

Dialog.KeyboardComponent = DialogKeyboardView

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
        opts.onClosed?.()
      }}
    />,
  )
}

export default Dialog
