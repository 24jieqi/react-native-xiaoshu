import type { TextStyle, StyleProp, ColorValue, ViewProps } from 'react-native'

import type { LoadingTheme } from './style'

export interface LoadingProps extends ViewProps {
  theme?: Partial<LoadingTheme>
  /**
   * 文案的样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 颜色
   */
  color?: ColorValue

  /**
   * 图标类型
   * @default 'circular'
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

  /**
   * 自定义 loading 图标，需要自己实现动画
   */
  loadingIcon?:
    | React.ReactNode
    | ((size: number, color: ColorValue) => React.ReactNode)
}
