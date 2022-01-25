import type React from 'react'
import type {
  ViewStyle,
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
  TextProps,
  TouchableOpacityProps,
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
   * 内容自定义样式
   */
  bodyStyle?: StyleProp<ViewStyle>

  /**
   * 是否显示外边框
   * @default false
   */
  bordered?: boolean

  /**
   * 点击头部文案
   */
  onPressTitleText?: TextProps['onPress']

  /**
   * 头部右侧自定义内容
   */
  extra?: React.ReactNode
}

export interface CellPrivateProps {
  /**
   * 内部布局样式
   */
  innerStyle?: StyleProp<ViewStyle>

  /**
   * 左侧标题
   */
  title?: React.ReactNode

  /**
   * 左侧标题样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 左侧标题样文案式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题的左侧自定义内容
   */
  titleExtra?: React.ReactNode

  /**
   * 右侧内容
   */
  value?: React.ReactNode

  /**
   * 右侧内容样式
   */
  valueStyle?: StyleProp<ViewStyle>

  /**
   * 右侧内容样文案式
   */
  valueTextStyle?: StyleProp<TextStyle>

  /**
   * 右侧内容的右侧自定义内容
   */
  valueExtra?: React.ReactNode

  /**
   * 内容部分的样式 垂直模式模式下有小
   */
  contentStyle?: StyleProp<ViewStyle>

  /**
   * 是否显示内边框
   * @default true
   */
  bordered?: boolean

  /**
   * 是否展示右侧箭头并开启点击反馈
   * @default false
   */
  isLink?: boolean

  /**
   * 点击右侧图标
   */
  onPressLink?: TouchableOpacityProps['onPress']

  /**
   * 是否使内容垂直居中
   * @default false
   */
  center?: boolean

  /**
   * 箭头方向
   * @default 'right'
   */
  arrowDirection?: 'left' | 'up' | 'right' | 'down'

  /**
   * 是否显示表单必填星号
   * @default false
   */
  required?: boolean

  /**
   * 垂直对齐
   * @default false
   */
  vertical?: boolean

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
