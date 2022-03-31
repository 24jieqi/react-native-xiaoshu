import type { ViewProps } from 'react-native'

export interface BottomBarProps extends ViewProps {
  /**
   * 是否开启底部安全区适配
   * @default true
   */
  safeAreaInsetBottom?: boolean

  /**
   * 背景色
   * @default bottom_bar_background_color
   */
  backgroundColor?: string

  /**
   * 元素高度
   * @default bottom_bar_height
   */
  height?: number
}
