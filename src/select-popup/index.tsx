import React, { memo } from 'react'

import Portal from '../portal'
import type { SelectPopupInstance } from './interface'
import SelectBase from './select-popup'
import SelectMethod from './select-popup-method'

export { conversionSelectPopupOptions } from './helper'

const Picker: SelectPopupInstance = opt =>
  new Promise((resolve, reject) => {
    const key = Portal.add(
      <SelectMethod
        {...opt}
        onChange={(v, o) => {
          opt.onChange && opt.onChange(v, o)
          resolve(v)
        }}
        onClose={() => {
          opt.onClose && opt.onClose()
          reject()
        }}
        onClosed={() => {
          opt.onClosed && opt.onClosed()

          Portal.remove(key)
        }}
      />,
    )
  })

Picker.Component = memo(props => {
  return (
    <Portal>
      <SelectBase {...props} />
    </Portal>
  )
})

export default Picker
