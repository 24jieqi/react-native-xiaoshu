import type React from 'react'
import type { StyleProp, ViewStyle, TextStyle } from 'react-native'

export interface CardProps {
  /**
   * 标题
   */
  title?: React.ReactNode

  /**
   * 标题左侧操作区
   */
  titleLeftExtra?: React.ReactNode

  /**
   * 卡片右上角的操作区域
   */
  extra?: React.ReactNode

  /**
   * 底部区域
   */
  footer?: React.ReactNode

  /**
   * 自定义标题区域样式
   */
  headerStyle?: StyleProp<ViewStyle>

  /**
   * 头部标题的样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 头部标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 内容区域自定义样式
   */
  bodyStyle?: StyleProp<ViewStyle>

  /**
   * 底部自定义样式
   */
  footerStyle?: StyleProp<ViewStyle>

  /**
   * 底部文案自定义样式
   */
  footerTextStyle?: StyleProp<TextStyle>

  // /**
  //  * 是否有边框
  //  * @default false
  //  */
  // bordered?: boolean

  /**
   * card 的尺寸
   * @default 'm'
   */
  size?: 'm' | 's'

  /**
   * 是否为方形按钮
   * @default false
   */
  square?: boolean

  /**
   * 当卡片内容还在加载中时，可以用 loading 展示一个占位
   * @default false
   */
  loading?: boolean
}
