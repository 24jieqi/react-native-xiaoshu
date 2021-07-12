import React, { createRef } from 'react'

import Portal from '../portal'
import type {
  ToastProps,
  ToastType,
  ToastInstance,
  ToastMethods,
} from './interface'
import ToastView from './toast'

type OptionsMap = Record<ToastType, ToastProps | undefined | null>

const parseOptions = (message: ToastProps | string) => {
  if (typeof message === 'object') {
    return message
  }
  return { message }
}

const defaultOptions: ToastProps = {
  type: 'text',
  duration: 2000,
  message: '',
  position: 'middle',
  forbidPress: false,
  closeOnPressOverlay: false,
  overlay: false,
  loadingType: 'circular',
}

let defaultOptionsMap = {} as OptionsMap

let currentOptions = {
  ...defaultOptions,
}

/**
 * 提示
 */
const Toast: ToastInstance = options => {
  let opts: ToastProps =
    typeof options === 'string' ? { message: options } : options

  const type = opts.type || currentOptions.type

  // 合并参数
  opts = {
    ...currentOptions,
    ...(type ? defaultOptionsMap[type] : {}),
    ...opts,
  }
  const ToastRef = createRef<ToastMethods>()
  const key = Portal.add(
    <ToastView
      {...opts}
      ref={ToastRef}
      onClosed={() => {
        Portal.remove(key)
        opts.onClosed && opts.onClosed()
      }}
    />,
  )

  // TODO 优化调用方法
  return {
    close: () => {
      ToastRef.current?.close()
    },
    setMessage: (m: string) => {
      ToastRef.current?.setMessage(m)
    },
  }
}

/**
 * loading
 */
Toast.loading = options =>
  Toast({
    type: 'loading',
    ...parseOptions(options),
  })

// TODO success fail 现在不确定两个图标用 svg 画还是字体文件
// react-native-vector-icons 太庞大了

/**
 * 清除弹窗
 */
Toast.clear = mark => {
  if (typeof mark === 'boolean') {
    // 清除所有
  } else {
    // 清除某一个
  }
}

/**
 * 修改默认配置，对所有 Toast 生效。传入 type 可以修改指定类型的默认配置
 */
Toast.setDefaultOptions = (type, options) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options
  } else {
    Object.assign(currentOptions, type)
  }
}

/**
 * 重置默认配置，对所有 Toast 生效。传入 type 可以重置指定类型的默认配置
 */
Toast.resetDefaultOptions = type => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null
  } else {
    currentOptions = { ...defaultOptions }
    defaultOptionsMap = {} as OptionsMap
  }
}

export default Toast
