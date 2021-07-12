import type React from 'react'
import type {
  ViewStyle,
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
} from 'react-native'

export type CellGroupProps = {
  /**
   * 分组名称
   */
  title?: React.ReactNode

  /**
   * 自定义样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 自定义文字样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 是否显示外边框
   *
   * @default `true`
   */
  border?: boolean
}

export interface CellPrivateProps {
  innerStyle?: StyleProp<ViewStyle>

  titleWrapperStyle?: StyleProp<ViewStyle>

  titleStyle?: StyleProp<ViewStyle>

  titleTextStyle?: StyleProp<TextStyle>

  valueStyle?: StyleProp<ViewStyle>

  valueTextStyle?: StyleProp<TextStyle>

  /** 左侧标题 */
  title?: React.ReactNode

  /** 右侧内容 */
  value?: React.ReactNode

  /** 单元格大小，可选值为 large */
  size?: 'large'

  /** 左侧图标名称或图片链接 */
  icon?: React.ReactNode

  /** 自定义右侧按钮，默认为 arrow */
  rightIcon?: React.ReactNode

  /** 是否显示内边框 */
  border?: Boolean

  /** 是否展示右侧箭头并开启点击反馈 */
  isLink?: Boolean

  /** 是否使内容垂直居中 */
  center?: Boolean

  /** 箭头方向 */
  arrowDirection?: 'left' | 'up' | 'right' | 'down'

  /** 是否显示表单必填星号 */
  required?: boolean

  /**
   * 垂直对齐
   * @default false
   */
  vertical?: boolean

  /**
   * 点击右侧图标
   */
  onPressRightIcon?: () => void

  /**
   * value 区域 Text 的 numberOfLines
   */
  valueTextNumberOfLines?: number

  /**
   * 文字对齐方向
   * @default 'right'
   */
  textAlign?: 'right' | 'center' | 'left'
}

export interface CellProps extends TouchableHighlightProps, CellPrivateProps {}
