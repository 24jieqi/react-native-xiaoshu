import type { TextStyle, ViewStyle, StyleProp } from 'react-native'

export interface BadgeProps {
  /**
   * 最外层 Badge 的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 文案部分样式
   */
  countStyle?: StyleProp<ViewStyle>

  /**
   * 数字文案样式
   */
  countTextStyle?: StyleProp<TextStyle>

  /**
   * 徽标内容
   */
  count?: number | string

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
   * 最大值，超过最大值会显示 {max}+，仅当 count 为数字时有效
   */
  max?: number

  /**
   * 数据是否在加载中，如果在加载中就暂时不显示 count
   * @default false
   */
  loading?: boolean

  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  showZero?: boolean
}
