import type React from 'react'
import type { ViewStyle, StyleProp } from 'react-native'

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center'

/** popup 通用的 props */
export interface PopupPropsCommon {
  /**
   * 是否展示遮罩层
   * @default false
   */
  show: boolean

  /**
   * 动画时长，单位毫秒秒
   * @default animation_duration_base
   */
  duration?: number

  /**
   * 是否显示遮罩层
   * @default true
   */
  overlay?: boolean

  /**
   * 是否在点击遮罩层后关闭
   * @default true
   */
  closeOnPressOverlay?: boolean

  /**
   * 点击遮罩层时触发
   */
  onPressOverlay?: Function

  /**
   * 打开弹出层时触发
   */
  onOpen?: Function

  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: Function

  /**
   * 关闭弹出层时触发，And
   */
  onClose?: Function

  /**
   * 关闭弹出层且动画结束后触发
   */
  onClosed?: Function

  /**
   * 当点击返回按钮时触发
   * @support Android
   */
  onRequestClose?: () => boolean
}

export interface PopupProps extends PopupPropsCommon {
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 弹出位置，可选值为 `'top' | 'bottom' | 'right' | 'left' | 'center'`
   * @default 'center'
   */
  position?: PopupPosition

  /**
   * 是否显示圆角
   * @default false
   */
  round?: boolean

  /**
   * 是否开启底部安全区适配
   * @default false
   */
  safeAreaInsetBottom?: boolean

  /**
   * 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean
}

export type State = {
  show: boolean
  overlayShow: boolean
  zIndex: number
  lazyRender: boolean
}

export interface PopupHeaderProps {
  /**
   * 标题
   */
  title?: React.ReactNode

  /**
   * 点击关闭
   */
  onClose?: () => void

  /**
   * 是否显示关闭按钮
   * @default true
   */
  showClose?: boolean
}
