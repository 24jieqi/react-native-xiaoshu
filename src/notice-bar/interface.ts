import type React from 'react'
import type {
  TouchableWithoutFeedbackProps,
  TextStyle,
  StyleProp,
} from 'react-native'

export type NoticeBarStatus = 'primary' | 'success' | 'warning' | 'error'

export type NoticeBarMode = 'closeable' | 'link'

export interface NoticeBarProps extends TouchableWithoutFeedbackProps {
  /**
   * 通知文本文案样式
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
   * 通知文本颜色
   * @default notice_bar_text_color
   */
  color?: string

  /**
   * 通知背景颜色
   * @default notice_bar_background_color
   */
  backgroundColor?: string

  /**
   * 图标颜色
   * @default notice_bar_text_color
   */
  iconColor?: string

  /**
   * 是否开启文本换行
   * @default false
   */
  wrapable?: boolean

  /**
   * 渲染左侧图标
   */
  renderLeftIcon?: (color: string, size: number) => React.ReactNode

  /**
   * 渲染右侧图标
   */
  renderRightIcon?: (color: string, size: number) => React.ReactNode

  /**
   * 点击关闭按钮
   */
  onPressClose?: () => void
}
