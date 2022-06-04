import React, { createRef } from 'react'

import Portal from '../portal'

import type {
  NotifyProps,
  NotifyMethodProps,
  NotifyMethods,
  NotifyOptions,
} from './interface'
import Notify from './notify'
import NotifyMethod from './notify-method'

export const Instance = (options: NotifyMethodProps | string) => {
  const opts: NotifyOptions =
    typeof options === 'string' ? { message: options } : options
  const NotifyRef = createRef<NotifyMethods>()
  const key = Portal.add(
    <NotifyMethod
      {...opts}
      ref={NotifyRef}
      onClosed={() => {
        Portal.remove(key)
        opts.onClosed?.()
      }}
    />,
  )

  return {
    close: () => {
      NotifyRef.current?.close()
    },
    setMessage: (m: React.ReactNode) => {
      NotifyRef.current?.setMessage(m)
    },
  }
}

export const Component: React.FC<NotifyProps> = props => (
  <Portal>
    <Notify {...props} />
  </Portal>
)

export const NotifyComponent = Notify
