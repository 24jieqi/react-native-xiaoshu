import React, { memo } from 'react'

import Portal from '../portal'

import type { SelectorInstance } from './interface'
import SelectorBase from './selector'
import SelectorMethod from './selector-method'
import SelectorText from './text'

const Selector: SelectorInstance = opt =>
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

Selector.Component = memo(props => {
  return (
    <Portal>
      <SelectorBase {...props} />
    </Portal>
  )
})

Selector.Text = SelectorText

export default Selector
