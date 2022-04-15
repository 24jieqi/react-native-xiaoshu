import type React from 'react'
import type { TextStyle, StyleProp, ViewProps, ColorValue } from 'react-native'
import type { SvgProps } from 'react-native-svg'

export type ResultStatus = 'success' | 'error' | 'info' | 'warning'

export interface ResultProps extends ViewProps {
  /**
   * subtitle 文字样式
   */
  subtitleTextStyle?: StyleProp<TextStyle>

  /**
   * subTitle 文字样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 操作区
   */
  extra?: React.ReactNode

  /**
   * 自定义 icon
   */
  renderIcon?: (color: ColorValue, size: number) => React.ReactNode

  /**
   * 结果的状态，决定图标和颜色
   */
  status: ResultStatus

  /**
   * subtitle 文字
   */
  subtitle?: React.ReactNode

  /**
   * title 文字
   */
  title?: React.ReactNode
}

export interface ResultIconProps extends SvgProps {
  width?: number
  height?: number
}
