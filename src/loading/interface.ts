import type { ViewStyle, TextStyle, StyleProp } from 'react-native'

export interface LoadingProps {
  /**
   * 最外层的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 文案部分的样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 颜色
   */
  color?: string

  /**
   * 类型，可选值为 spinner
   * @default circular
   */
  type?: 'spinner' | 'circular'

  /**
   * 加载图标大小，默认单位为px
   */
  size?: number

  /**
   * 文字大小，默认单位为px
   */
  textSize?: number

  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean
}
