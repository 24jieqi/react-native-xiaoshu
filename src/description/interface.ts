import type { ReactNode } from 'react'
import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ViewProps,
  FlexStyle,
} from 'react-native'

import type { DatePickerColumnMode } from '../date-picker-view/interface'

export interface DescriptionContextState {
  /**
   * label 和 text 之间是否有冒号
   * @default true
   */
  colon?: boolean

  /**
   * 自定义内容样式
   */
  contentStyle?: StyleProp<ViewStyle>

  /**
   * 自定义内容文案样式
   */
  contentTextStyle?: StyleProp<TextStyle>

  /**
   * 自定义标签样式
   */
  labelStyle?: StyleProp<ViewStyle>

  /**
   * 自定义标签文案样式
   */
  labelTextStyle?: StyleProp<TextStyle>

  /**
   * 标签文案宽
   */
  labelWidth?: number

  /**
   * 描述布局
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical'

  /**
   * 设置列表的大小
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
}

export interface DescriptionGroupProps
  extends DescriptionContextState,
    ViewProps {}

export interface DescriptionProps extends DescriptionContextState, ViewProps {
  /**
   * 内容的描述
   */
  label?: string

  /**
   * 内容
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
  color?: TextStyle['color']

  /**
   * 内容前置标签
   */
  addonBefore?: ReactNode

  /**
   * 内容后置标签
   */
  addonAfter?: ReactNode

  /**
   * 自定义渲染描述
   */
  renderLabel?: (colon: string) => ReactNode

  /**
   * 自定义渲染函数
   */
  render?: (
    context: ReactNode,
    addonBefore: ReactNode,
    addonAfter: ReactNode,
  ) => ReactNode
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
