import type React from 'react'
import type {
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
} from 'react-native'

export type ButtonSize = 'default' | 'large' | 'normal' | 'small' | 'mini'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'link'

export interface ButtonProps
  extends Omit<TouchableHighlightProps, 'underlayColor' | 'activeOpacity'> {
  /**
   * 按钮文字
   */
  text?: string

  /**
   * 文字自定义样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 大小
   * @default 'default'
   */
  size?: ButtonSize

  /**
   * 类型
   *
   * @default 'default'
   */
  type?: ButtonType

  /**
   * 朴素
   */
  ghost?: boolean

  /**
   * 细边框
   */
  hairline?: boolean

  /**
   * 是否禁用按钮
   */
  disabled?: boolean

  /**
   * 是否显示为加载状态
   */
  loading?: boolean

  /**
   * 加载状态提示文字
   */
  loadingText?: string

  /**
   * 是否为方形按钮
   */
  square?: boolean

  /**
   * 是否为圆形按钮
   */
  round?: boolean

  /**
   * 渲染左侧图标
   */
  renderLeftIcon?: (color: string, size: number) => React.ReactElement

  /**
   * 按钮颜色，不支持渐变
   */
  color?: string

  /**
   * 按钮文案颜色，设置了 color 默认值为 #fff
   */
  textColor?: string
}
