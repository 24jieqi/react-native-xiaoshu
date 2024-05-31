import React from 'react'

import Portal from '../portal'

import ActionSheet from './action-sheet'
import ActionSheetMethod from './action-sheet-method'
import type { ActionSheetOptions, Action, ActionSheetProps } from './interface'

export const ActionSheetInstance = (opts: ActionSheetOptions) => {
  return new Promise<{ item: Action; index: number }>((resolve, reject) => {
    const key = Portal.add(
      <ActionSheetMethod
        {...opts}
        onClosed={() => {
          Portal.remove(key)

          opts.onClosed?.()
        }}
        onResponse={(action, item, index) => {
          opts.onResponse?.(action, item, index)

          // 语义上应该是指定某个操作，不会关系是如何取消的，所以 Promise 只关系点击了哪个操作
          if (action === 'item') {
            resolve({
              item: item!,
              index: index!,
            })
          } else {
            reject(new Error(action))
          }
        }}
      />,
    )
  })
}

export const Component: React.FC<ActionSheetProps> = props => (
  <Portal>
    <ActionSheet {...props} />
  </Portal>
)

export const ActionSheetComponent = Component
