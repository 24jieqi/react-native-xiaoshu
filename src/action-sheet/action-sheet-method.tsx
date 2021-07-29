import React, { useState, useEffect, memo } from 'react'

import * as helpers from '../helpers'
import { isPromise } from '../helpers/typeof'
import type {
  ActionSheetMethodProps,
  ActionSheetAction,
  Action,
} from './interface'
import ActionSheet from './action-sheet'

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
  callback,
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

      const done = () => {
        callback && callback(action, item, index)
        canceled()
        setVisible(false)
      }

      if (beforeClose) {
        const returnVal = beforeClose(action, item, index)

        // 如果有判断条件
        if (isPromise(returnVal)) {
          setLocalActions(las =>
            las.map((ac, aci) => {
              if (index === aci) {
                ac.loading = true
                ac._loading = true
              }
              return ac
            }),
          )

          returnVal
            .then(value => {
              if (value) {
                // 关闭动作面板
                done()
              } else {
                canceled()
              }
            })
            .catch(helpers.noop)
        } else {
          if (returnVal) {
            // 关闭动作面板
            done()
          } else {
            canceled()
          }
        }
      } else {
        // 关闭动作面板
        done()
      }
    }

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <ActionSheet
      {...restProps}
      visible={visible}
      actions={localActions}
      onPressOverlay={genOnPressBtn('overlay')}
      onCancel={genOnPressBtn('cancel')}
      onSelect={(item, index) => genOnPressBtn('item')(item, index)}
    />
  )
}

export default memo(ActionSheetMethod)
