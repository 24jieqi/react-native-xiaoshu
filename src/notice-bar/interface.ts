import type React from 'react'
import type {
  TouchableWithoutFeedbackProps,
  TextStyle,
  StyleProp,
  ColorValue,
} from 'react-native'

import type { FixHitSlopProps } from '../helpers/types'

import type { NoticeBarTheme } from './style'

export type NoticeBarStatus = 'primary' | 'success' | 'warning' | 'error'

export type NoticeBarMode = 'closeable' | 'link'

export interface NoticeBarProps
  extends FixHitSlopProps<TouchableWithoutFeedbackProps> {
  theme?: Partial<NoticeBarTheme>
  /**
   * 通知文本文字样式
   */
  messageTextStyle?: StyleProp<TextStyle>

  /**
   * 通知文本内容
   */
  message?: React.ReactNode

  /**
   * 内置状态
   * @default 'warning'
   */
  status?: NoticeBarStatus

  /**
   * 通知栏模式，可选值为 `'closeable' | 'link'`
   */
  mode?: NoticeBarMode

  /**
   * 是否显示边框
   * @default false
   */
  bordered?: boolean

  /**
   * 通知文本颜色
   * @default notice_bar_text_color
   */
  color?: ColorValue

  /**
   * 通知背景颜色
   * @default notice_bar_background_color
   */
  backgroundColor?: ColorValue

  /**
   * 图标颜色
   * @default notice_bar_text_color
   */
  iconColor?: ColorValue

  /**
   * 是否开启文本换行
   * @default false
   */
  wrapable?: boolean

  /**
   * 是否为方形
   * @default true
   */
  square?: boolean

  /**
   * 大小
   * @default 'm'
   */
  size?: 'm' | 's'

  /**
   * 渲染左侧图标
   */
  renderLeftIcon?: (color: ColorValue, size: number) => React.ReactNode

  /**
   * 渲染右侧图标
   */
  renderRightIcon?: (color: ColorValue, size: number) => React.ReactNode

  /**
   * 点击关闭按钮
   */
  onPressClose?: () => void
}
