import type { TextStyle, ViewStyle, StyleProp } from 'react-native'

export interface BadgeProps {
  /**
   * 文案布局样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 文案样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 外层样式
   */
  wrapperStyle?: StyleProp<ViewStyle>

  /**
   * 徽标内容
   */
  content?: number | string

  /**
   * 徽标背景颜色
   */
  color?: string

  /**
   * 是否展示为小红点
   * @default false
   */
  dot?: boolean

  /**
   * 最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效
   */
  max?: number
}
