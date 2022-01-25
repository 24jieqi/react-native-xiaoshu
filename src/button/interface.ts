import type React from 'react'
import type {
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
} from 'react-native'

export type ButtonSize = 'xl' | 'l' | 'm' | 's' | 'xs'

export type ButtonType = 'primary' | 'hazy' | 'outline' | 'ghost' | 'link'

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
   * @default 'm'
   */
  size?: ButtonSize

  /**
   * 类型
   * @default 'primary'
   */
  type?: ButtonType

  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean

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
   * 按钮文案颜色
   * @default button_primary_color
   */
  textColor?: string
}
