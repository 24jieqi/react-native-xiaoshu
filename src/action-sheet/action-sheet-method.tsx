import React, { useState, useEffect, memo } from 'react'

import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'

import ActionSheet from './action-sheet'
import type {
  ActionSheetMethodProps,
  ActionSheetAction,
  Action,
} from './interface'

interface LocalAction extends Action {
  /** 记录谁被点击了 */
  _loading?: boolean
}

/**
 * ActionSheet 动作面板
 * @description 底部弹起的模态面板，包含与当前情境相关的多个选项。
 */
const ActionSheetMethod: React.FC<ActionSheetMethodProps> = ({
  actions,
  beforeClose,
  onResponse,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false)
  const [localActions, setLocalActions] = useState<LocalAction[]>(() => {
    return actions.map(ac => {
      if (typeof ac === 'string') {
        return { name: ac }
      }
      return ac
    })
  })

  const genOnPressBtn =
    (action: ActionSheetAction) => (item?: Action, index?: number) => {
      const canceled = () => {
        setLocalActions(las =>
          las.map(ac => {
            if (ac._loading) {
              ac.loading = false
              ac._loading = false
            }
            return ac
          }),
        )
      }

      if (action === 'item') {
        setLocalActions(las =>
          las.map((ac, _index) => {
            if (_index === index) {
              return {
                ...ac,
                loading: true,
                _loading: true,
              }
            }

            return ac
          }),
        )
      }

      callInterceptor(beforeClose, {
        args: [action, item, index],
        done: () => {
          canceled()
          setVisible(false)
          onResponse?.(action, item, index)
        },
        canceled,
      })
    }

  useEffect(() => {
    setVisible(true)
  }, [])

  const onRequestClose = usePersistFn(() => {
    genOnPressBtn('overlay')()
    return true
  })

  return (
    <ActionSheet
      {...restProps}
      onRequestClose={onRequestClose}
      visible={visible}
      actions={localActions}
      onPressOverlay={genOnPressBtn('overlay')}
      onCancel={genOnPressBtn('cancel')}
      onSelect={(item, index) => genOnPressBtn('item')(item, index)}
    />
  )
}

export default memo(ActionSheetMethod)
