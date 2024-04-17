import type { PropsWithChildren, ReactNode } from 'react'
import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ColorValue,
  ViewProps,
} from 'react-native'

import type { CollapseTheme } from './style'

export interface CollapseProps
  extends PropsWithChildren<{}>,
    Pick<ViewProps, 'testID'> {
  theme?: Partial<CollapseTheme>

  /**
   * 标题
   */
  title?: ReactNode

  /**
   * 标题样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 标题文字样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题图标样式
   */
  iconStyle?: StyleProp<ViewStyle>

  /**
   * 标题图标颜色
   * @default collapse_title_icon_color
   */
  iconColor?: ColorValue

  /**
   * 标题图标大小
   * @default collapse_title_icon_size
   */
  iconSize?: number

  /**
   * 子元素/内容布局样式
   */
  bodyStyle?: StyleProp<ViewStyle>

  /**
   * 自定义渲染标题
   */
  renderTitle?: (collapse: boolean) => ReactNode

  /**
   * 自定义渲染标题右侧
   */
  renderTitleExtra?: (collapse: boolean, arrowJSX: ReactNode) => ReactNode

  /**
   * 自定义渲染内容，替换 children
   */
  renderBody?: () => ReactNode

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
   * 模式、场景
   * @default 'cell'
   */
  type?: 'cell' | 'card'

  /**
   * 动画结束的回调，注意组件渲染问题，会存在多次回调
   */
  onAnimationEnd?: (collapse: boolean) => void

  /**
   * 内容区域是否有内边距
   * @default true
   */
  bodyPadding?: boolean

  /**
   * 头部区域是否有分割线
   * @default true
   */
  headerDivider?: boolean

  /**
   * 内容区域是否有分割线，cell 默认 true，card 默认false
   */
  bodyDivider?: boolean

  /**
   * 是否在展开的时候才渲染子元素
   * @default true
   */
  lazyRender?: boolean

  /**
   * 是否为方形，仅对 card 类型有效
   * @default true
   */
  square?: boolean
}
