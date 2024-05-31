import React, { useEffect, memo } from 'react'

import { callInterceptor } from '../helpers'
import useState from '../hooks/useStateUpdate'

import Dialog from './dialog'
import type {
  DialogMethodProps,
  DialogAction,
  DialogMethodState,
} from './interface'

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogMethod: React.FC<DialogMethodProps> = ({
  beforeClose,
  onResponse,
  ...restProps
}) => {
  const [state, setState] = useState<DialogMethodState>({
    visible: false,
    cancel: false,
    confirm: false,
    overlay: false,
  })

  const genOnPressBtn = (action: DialogAction) => () => {
    setState({
      [action]: true,
    })

    callInterceptor(beforeClose, {
      args: [action],
      done: () => {
        onResponse?.(action)
        setState({
          [action]: false,
          visible: false,
        })
      },
      canceled: () => {
        setState({
          [action]: false,
        })
      },
    })
  }

  useEffect(() => {
    setState({
      visible: true,
    })
  }, [])

  const onRequestClose = () => {
    genOnPressBtn('overlay')()
    return true
  }

  const onPressClose = () => {
    setState({
      visible: false,
    })
  }

  return (
    <Dialog
      {...restProps}
      onRequestClose={onRequestClose}
      visible={state.visible}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      onPressOverlay={genOnPressBtn('overlay')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}
      onPressClose={onPressClose}
    />
  )
}

export default memo(DialogMethod)
