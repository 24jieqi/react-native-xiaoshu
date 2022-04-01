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

  /**
   * 是否隐藏
   * @default false
   */
  hidden?: boolean

  /**
   * 当软键盘弹出来的时候不渲染，BottomBar 固定在底部的布局中，在 Android 机器上 BottomBar 会被软键盘挤上去
   * @default true
   */
  keyboardShowNotRender?: boolean
}
