import type React from 'react'
import type { StyleProp, ViewStyle, TextStyle } from 'react-native'

export interface CollapseProps {
  /**
   * 标题
   */
  title?: React.ReactNode

  /**
   * 标题样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题图标样式
   */
  iconStyle?: StyleProp<ViewStyle>

  /**
   * 标题图标颜色
   * @default 'collapse_title_icon_color'
   */
  iconColor?: string

  /**
   * 标题图标大小
   * @default 'collapse_title_icon_size'
   */
  iconSize?: number

  /**
   * 子元素/内容布局样式
   */
  bodyStyle?: StyleProp<ViewStyle>

  /**
   * 自定义渲染标题
   */
  renderTitle?: (collapse: boolean) => React.ReactNode

  /**
   * 自定义渲染内容，替换 children
   */
  renderBody?: (collapse: boolean) => React.ReactNode

  /**
   * 是否展开
   */
  collapse?: boolean

  /**
   * 默认状态是否展开
   */
  defaultCollapse?: boolean

  /**
   * 状态改变的回调
   */
  onCollapse?: (collapse: boolean) => void

  /**
   * 动画结束的回调，注意组件渲染问题，会存在多次回调
   */
  onAnimationEnd?: (collapse: boolean) => void

  /**
   * 内容区域是否有内边距
   * @default true
   */
  bodyPadding?: boolean
}