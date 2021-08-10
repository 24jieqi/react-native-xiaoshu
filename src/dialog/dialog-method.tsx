import React, { useEffect, memo } from 'react'

import useState from '../hooks/useStateUpdate'
import { isPromise } from '../helpers/typeof'
import type {
  DialogMethodProps,
  DialogAction,
  DialogMethodState,
} from './interface'
import Dialog from './dialog'

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogMethod: React.FC<DialogMethodProps> = ({
  beforeClose,
  callback,
  ...restProps
}) => {
  const [state, setState] = useState<DialogMethodState>({
    visible: false,
    cancel: false,
    confirm: false,
    overlay: false,
  })

  const genOnPressBtn = (action: DialogAction) => () => {
    const doOkCallback = (v: boolean, okCallback: () => void) => {
      setState({
        [action]: false,
      })
      if (v) {
        okCallback()
      }
    }
    const doCallback = (
      returnVal: boolean | Promise<boolean>,
      okCallback: () => void,
    ) => {
      if (isPromise(returnVal)) {
        setState({
          [action]: true,
        })

        returnVal.then(value => {
          doOkCallback(value, okCallback)
        })
      } else {
        doOkCallback(returnVal, okCallback)
      }
    }
    const doOnPressCallback = () => {
      callback(action)
      doOkCallback(true, () => {
        setState({
          visible: false,
        })
      })
    }

    if (beforeClose) {
      doCallback(beforeClose(action), () => {
        doOnPressCallback()
      })
    } else {
      doOnPressCallback()
    }
  }

  useEffect(() => {
    setState({
      visible: true,
    })
  }, [])

  return (
    <Dialog
      {...restProps}
      visible={state.visible}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      onPressOverlay={genOnPressBtn('overlay')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}
    />
  )
}

export default memo(DialogMethod)
