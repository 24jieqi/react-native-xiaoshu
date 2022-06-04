import type { TextStyle, StyleProp, ColorValue, ViewProps } from 'react-native'

export interface LoadingProps extends ViewProps {
  /**
   * 文案部分的样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 颜色
   */
  color?: ColorValue

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
   * 文字大小
   */
  textSize?: number

  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean
}
