import React, { memo, createRef } from 'react'

import Portal from '../portal'

import type { NotifyInstance, NotifyMethods, NotifyOptions } from './interface'
import NotifyView from './notify'
import NotifyMethod from './notify-method'

const Notify: NotifyInstance = options => {
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

Notify.Component = memo(props => {
  return (
    <Portal>
      <NotifyView {...props} />
    </Portal>
  )
})

export default Notify
