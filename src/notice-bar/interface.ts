import type React from 'react'
import type { ViewProps } from 'react-native'

export type ButtonSize = 'default' | 'large' | 'normal' | 'small' | 'mini'

export interface NoticeBarProps extends ViewProps {
  /**
   * 类型，可选值为 `'default' | 'primary' | 'success' | 'error' | 'warning'`
   *
   * @default 'default'
   */
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning'

  /**
   * 大小
   * @default 'default'
   */
  size?: ButtonSize

  /**
   * 标签颜色
   */
  textColor?: string
  /**
   * 背景颜色
   */
  TextBackgroundColor?: string
  /**
   * 是否展示左边提示图标
   */
  showIcon?: boolean

  /**
   * 是否展示右侧按钮
   */
  rightIcon?: boolean

  /**
   * 渲染左侧图标
   */
  renderLeftIcon?: (color: string, size: number) => React.ReactElement
  /**
   * 渲染右侧图标
   */
  renderRightIcon?: (color: string, size: number) => React.ReactElement

  /**
   * 当文本过长的时候裁剪文本行数
   */
  numberOfLines?: number

  /**
   * 点击icon时的回调函数
   */
  onPress?: () => void
}
