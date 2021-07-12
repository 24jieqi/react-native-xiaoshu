import type React from 'react'
import type { ViewStyle, TextStyle, StyleProp } from 'react-native'

export interface NavBarProps {
  /**
   * 最外层的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 左箭头样式
   */
  leftArrowStyle?: StyleProp<TextStyle>

  /**
   * 标题样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题文字或自定义 JSX
   */
  title?: React.ReactNode

  /**
   * 左侧文字或自定义 JSX
   */
  leftText?: React.ReactNode

  /**
   * 右侧文字或自定义 JSX
   */
  rightText?: React.ReactNode

  /**
   * 是否显示左箭头
   *
   * @default true
   */
  leftArrow?: boolean

  /**
   * 是否显示下边框
   * @default true
   */
  border?: boolean

  /**
   * 点击左侧按钮
   */
  onPressLeftArrow?: () => void

  /**
   * 点击右侧按钮文字
   */
  onPressLeftText?: () => void
}
