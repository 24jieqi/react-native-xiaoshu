import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'

import type { NotifyMethodProps, NotifyMethods } from './interface'
import Notify from './notify'

/**
 * Notify 消息提示
 * @description 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
 */
const NotifyMethod = forwardRef<NotifyMethods, NotifyMethodProps>(
  ({ duration = 3000, message, ...restProps }, ref) => {
    const [visible, setVisible] = useState(false)
    const [msg, setMsg] = useState(message)

    useEffect(() => {
      setVisible(true)

      let timer: ReturnType<typeof setTimeout>

      if (duration !== 0) {
        timer = setTimeout(() => {
          // 隐藏弹窗
          setVisible(false)
        }, duration)
      }

      return () => {
        clearTimeout(timer)
      }
    }, [duration])

    // 向外暴露函数
    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          setVisible(false)
        },
        setMessage: s => {
          setMsg(s)
        },
      }),
      [],
    )

    return <Notify {...restProps} visible={visible} message={msg} />
  },
)

export default memo(NotifyMethod)
