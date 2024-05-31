import type { ReactElement, ReactNode } from 'react'
import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ViewProps,
  FlexStyle,
  ColorValue,
} from 'react-native'

import type { DatePickerColumnMode } from '../date-picker-view/interface'

import type { DescriptionTheme } from './style'

export interface DescriptionContextState {
  /**
   * label 和 text 之间是否有冒号
   * @default true
   */
  colon?: boolean

  /**
   * 内容样式
   */
  contentStyle?: StyleProp<ViewStyle>

  /**
   * 内容文字样式
   */
  contentTextStyle?: StyleProp<TextStyle>

  /**
   * 标签样式
   */
  labelStyle?: StyleProp<ViewStyle>

  /**
   * 标签文字样式
   */
  labelTextStyle?: StyleProp<TextStyle>

  /**
   * 标签文字宽
   */
  labelWidth?: number

  /**
   * label 与 text 的排版、布局
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical'

  /**
   * 文案大小
   * @default 'm'
   */
  size?: 's' | 'm' | 'l'

  /**
   * 右侧文案显示几行
   */
  numberOfLines?: number

  /**
   * 主轴对齐方式
   */
  justify?: FlexStyle['justifyContent']

  /**
   * 交叉轴对齐方式
   */
  align?: FlexStyle['alignItems']

  /**
   * 空数据占位符
   * @default '--'
   */
  empty?: ReactNode

  /**
   * 显示空数据占位符
   * @default false
   */
  showEmpty?: boolean
}

export interface DescriptionGroupProps
  extends DescriptionContextState,
    ViewProps {}

export interface DescriptionProps extends DescriptionContextState, ViewProps {
  theme?: Partial<DescriptionTheme>
  /**
   * 内容的描述
   */
  label?: string

  /**
   * 内容，自定义内容使用子元素的方式
   */
  text?: string

  /**
   * 是否隐藏
   * @default false
   */
  hidden?: boolean

  /**
   * 是否加粗显示内容，样式优先级低于自定义样式
   * @default false
   */
  bold?: boolean

  /**
   * 字体颜色，样式优先级低于自定义样式
   */
  color?: ColorValue

  /**
   * 内容前置标签
   */
  addonBefore?: ReactElement

  /**
   * 内容后置标签
   */
  addonAfter?: ReactElement

  /**
   * 自定义渲染描述
   */
  renderLabel?: (colon: string) => ReactNode

  /**
   * 自定义渲染函数，适用于自定义排版
   * @param content text/children 包裹后的 ReactNode
   * @param addonBefore addonBefore 包裹后的 ReactNode
   * @param addonAfter addonAfter 包裹后的 ReactNode
   */
  render?: (
    content: ReactNode,
    addonBefore: ReactNode,
    addonAfter: ReactNode,
  ) => ReactNode

  /**
   * 空数据占位符
   */
  empty?: ReactNode

  /**
   * 显示空数据占位符
   */
  showEmpty?: boolean
}

export interface DescriptionThousandProps
  extends Omit<DescriptionProps, 'text'> {
  /**
   * 显示的数字
   */
  text?: number
}

export interface DescriptionDateProps extends Omit<DescriptionProps, 'text'> {
  /**
   * 显示的时间
   */
  text?: Date

  /**
   * 时间格式
   * @default 'Y-m'
   */
  mode?: DatePickerColumnMode
}

export interface DescriptionDateRangeProps
  extends Omit<DescriptionDateProps, 'text'> {
  /**
   * 显示的时间
   */
  text?: [Date, Date]

  /**
   * 时间分割字符串
   * @default '至'
   */
  split?: string
}
