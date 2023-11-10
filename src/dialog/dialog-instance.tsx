import React from 'react'

import Portal from '../portal'

import Dialog from './dialog'
import DialogInput from './dialog-input'
import DialogKeyboard from './dialog-keyboard'
import DialogMethod from './dialog-method'
import type {
  DialogOptions,
  DialogAction,
  DialogInputOptions,
  DialogProps,
  DialogKeyboardProps,
} from './interface'

export const Instance = (opts: DialogOptions) => {
  return new Promise<DialogAction>(resolve => {
    const key = Portal.add(
      <DialogMethod
        {...opts}
        onClosed={() => {
          Portal.remove(key)

          opts.onClosed?.()
        }}
        onResponse={action => {
          resolve(action)
        }}
      />,
    )
  })
}

export const confirm = (options: Omit<DialogOptions, 'showCancelButton'>) =>
  Instance({
    showCancelButton: true,
    ...options,
  })

export const input = (opts: DialogInputOptions) => {
  const key = Portal.add(
    <DialogInput
      {...opts}
      onClosed={() => {
        Portal.remove(key)
        opts.onClosed?.()
      }}
    />,
  )
}

export const Component: React.FC<
  React.PropsWithChildren<DialogProps>
> = props => (
  <Portal>
    <Dialog {...props} />
  </Portal>
)

export const DialogComponent = Dialog

export const Keyboard: React.FC<
  React.PropsWithChildren<DialogKeyboardProps>
> = props => (
  <Portal>
    <DialogKeyboard {...props} />
  </Portal>
)

export const KeyboardComponent = DialogKeyboard
