import type React from 'react'

import type { PopupPropsCommon } from '../popup/interface'

import type { ToastTheme } from './style'

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'icon'

export type ToastMethods = {
  close: () => void
  setMessage: (s: string) => void
}

export interface ToastProps
  extends Omit<
    PopupPropsCommon,
    'visible' | 'duration' | 'closeOnPressOverlay'
  > {
  theme?: Partial<ToastTheme>
  /**
   * 提示类型，可选值为 `'text' | 'loading' | 'success' | 'fail' | 'icon'`
   * @default 'text'
   */
  type?: ToastType

  /**
   * 位置，可选值为 `'top' | 'bottom' | 'middle'`
   * @default 'middle'
   */
  position?: 'top' | 'bottom' | 'middle'

  /**
   * 文本内容(支持模板字符串\n换行)
   * @default ''
   */
  message?: string

  /**
   * 是否显示背景遮罩层
   * @default false
   */
  overlay?: boolean

  /**
   * 是否禁止背景点击
   * @default false
   */
  forbidPress?: boolean

  /**
   * 是否在点击后关闭
   * @default false
   */
  closeOnPress?: boolean

  /**
   * 是否在点击遮罩层后关闭
   * @default false
   */
  closeOnPressOverlay?: boolean

  /**
   * 加载图标类型, 可选值为 `'circular' | 'spinner'`
   * @default 'spinner'
   */
  loadingType?: 'circular' | 'spinner'

  /**
   * 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number

  /**
   * 自定义图标
   */
  icon?: React.ReactNode
}

export interface ToastOptions extends ToastProps {}
