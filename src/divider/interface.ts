import type { ViewStyle, TextStyle, StyleProp } from 'react-native'

export interface DividerProps {
  /**
   * 外层容器自定义样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 自定义文字样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 颜色模式
   * @default 'light'
   */
  type?: 'dark' | 'light'

  /**
   * 是否使用虚线
   */
  dashed?: boolean

  /**
   * 自定义颜色
   */
  color?: string

  /**
   * 内容位置，可选值为 `'left' | 'center' | 'right'`
   *
   * @default 'center'
   */
  contentPosition?: 'left' | 'center' | 'right'
}

export interface DividerLineProps
  extends Required<Pick<DividerProps, 'color' | 'dashed'>> {
  /**
   * 所处位置
   */
  position: 'left' | 'center' | 'right'

  /**
   * 是否自适应 占满剩余控件
   * @default true
   */
  adaptive?: boolean
}
