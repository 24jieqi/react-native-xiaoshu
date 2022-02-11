import React, { memo } from 'react'

import Portal from '../portal'

import ActionSheetView from './action-sheet'
import ActionSheetMethodView from './action-sheet-method'
import type { ActionSheetInstance } from './interface'

const ActionSheet: ActionSheetInstance = opts => {
  return new Promise((resolve, reject) => {
    const key = Portal.add(
      <ActionSheetMethodView
        {...opts}
        onClosed={() => {
          Portal.remove(key)

          opts.onClosed?.()
        }}
        callback={(action, item, index) => {
          if (action === 'item' && item && (index || index === 0)) {
            resolve({
              item,
              index,
            })
          } else {
            reject(action)
          }
        }}
      />,
    )
  })
}

ActionSheet.Component = memo(props => {
  return (
    <Portal>
      <ActionSheetView {...props} />
    </Portal>
  )
})

export default ActionSheet
