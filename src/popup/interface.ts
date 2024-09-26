// import type React from 'react'
import type { PropsWithChildren } from 'react'
import type { ViewStyle, StyleProp, ViewProps } from 'react-native'

import type { NavBarProps } from '../nav-bar/interface'
import type { OverlayProps } from '../overlay/interface'

import type { PopupTheme } from './style'

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center'

type PopupPropsCommonCallback = () => void

/** popup 通用的 props */
export interface PopupPropsCommon {
  /**
   * 是否显示
   * @default false
   */
  visible: boolean

  /**
   * 动画时长，单位毫秒
   * @default animation_duration_base
   */
  duration?: number

  /**
   * 是否显示遮罩层
   * @default true
   */
  overlay?: boolean

  /**
   * 受控组件：用于阻止 overlay onPress 事件；函数调用：可以用来阻碍弹出层消失
   * @default true
   */
  closeOnPressOverlay?: boolean

  /**
   * 点击遮罩层时触发
   */
  onPressOverlay?: PopupPropsCommonCallback

  /**
   * 打开弹出层时触发
   */
  onOpen?: PopupPropsCommonCallback

  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: PopupPropsCommonCallback

  /**
   * 关闭弹出层时触发
   */
  onClose?: PopupPropsCommonCallback

  /**
   * 关闭弹出层且动画结束后触发
   */
  onClosed?: PopupPropsCommonCallback

  /**
   * 当点击返回按钮时触发
   * @support Android
   */
  onRequestClose?: () => boolean

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | undefined

  /**
   * 自定义遮罩层颜色
   * @default overlay_background_color
   */
  overlayBackgroundColor?: OverlayProps['backgroundColor']
}

export interface PopupProps extends PopupPropsCommon, PropsWithChildren<{}> {
  theme?: Partial<PopupTheme>
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
   * 是否开启顶部安全区适配
   * @default false
   */
  safeAreaInsetTop?: boolean

  /**
   * 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean

  /**
   * 关闭时销毁 Popup，回退到 lazyRender 的状态
   * @default false
   */
  destroyOnClosed?: boolean
}

export interface PopupPageProps
  extends Omit<PopupProps, 'position' | 'safeAreaInsetTop'> {
  /**
   * 顶部安全高度
   * @default safeAreaInsets.top
   */
  safeAreaInsetTop?: number
}

export type State = {
  visible: boolean
  overlayVisible: boolean
  zIndex: number
  lazyRender: boolean
}

export interface PopupHeaderProps
  extends Omit<
    NavBarProps,
    | 'showBackArrow'
    | 'backArrowColor'
    | 'backArrowSize'
    | 'onPressBackArrow'
    | 'border'
    | 'theme'
  > {
  theme?: Partial<PopupTheme>
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

export interface PopupKeyboardShimProps extends ViewProps {}
