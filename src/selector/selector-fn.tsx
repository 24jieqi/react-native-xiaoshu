import React from 'react'

import Portal from '../portal'

import type { SelectorFnInstance } from './interface'
import SelectorMethod from './selector-method'

const SelectorFn: SelectorFnInstance = opt =>
  new Promise((resolve, reject) => {
    const key = Portal.add(
      <SelectorMethod
        {...opt}
        onChange={(v, o) => {
          opt.onChange?.(v, o)
          resolve(v)
        }}
        onClose={() => {
          opt.onClose?.()
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }}
        onClosed={() => {
          opt.onClosed?.()

          Portal.remove(key)
        }}
      />,
    )
  })

export default SelectorFn
