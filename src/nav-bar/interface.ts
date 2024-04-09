import type React from 'react'
import type {
  ViewStyle,
  TextStyle,
  StyleProp,
  ColorValue,
  ViewProps,
} from 'react-native'

import type { NavBarTheme } from './style'

export interface NavBarProps extends Pick<ViewProps, 'testID'> {
  theme?: Partial<NavBarTheme>
  /**
   * 最外层的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 左侧布局的样式
   */
  leftStyle?: StyleProp<ViewStyle>

  /**
   * 左侧自定义内容
   */
  leftExtra?: JSX.Element

  /**
   * 右侧布局的样式
   */
  rightStyle?: StyleProp<ViewStyle>

  /**
   * 右侧自定义内容
   */
  rightExtra?: JSX.Element

  /**
   * 标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题文字或自定义 JSX
   */
  title?: React.ReactNode

  /**
   * 显示返回箭头
   * @default true
   */
  showBackArrow?: boolean

  /**
   * 自定义返回按钮颜色
   */
  backArrowColor?: ColorValue

  /**
   * 自定义返回按钮尺寸
   */
  backArrowSize?: number

  /**
   * 是否显示分割线
   * @default true
   */
  divider?: boolean

  /**
   * 点击返回按钮的回调
   */
  onPressBackArrow?: () => void
}
