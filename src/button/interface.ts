import type React from 'react'
import type {
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
  ColorValue,
} from 'react-native'

import type { LoadingProps } from '../loading/interface'
import type { SpaceProps } from '../space/interface'

import type { ButtonTheme } from './style'

export interface ButtonProps
  extends Omit<TouchableHighlightProps, 'underlayColor' | 'activeOpacity'>,
    Pick<LoadingProps, 'loadingIcon'> {
  theme?: Partial<ButtonTheme>
  /**
   * 按钮文案
   */
  text?: string

  /**
   * 按钮子文案
   */
  subtext?: string

  /**
   * 文字自定义样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 大小
   * @default 'l'
   */
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'

  /**
   * 类型
   * @default 'primary'
   */
  type?: 'primary' | 'hazy' | 'outline' | 'ghost' | 'link'

  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean

  /**
   * 细边框
   * @default false
   */
  hairline?: boolean

  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean

  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 加载状态提示文字
   */
  loadingText?: string

  /**
   * 是否为方形按钮
   * @default false
   */
  square?: boolean

  /**
   * 是否为圆形按钮
   * @default false
   */
  round?: boolean

  /**
   * 渲染左侧图标
   */
  renderLeftIcon?: (color: ColorValue, size: number) => React.ReactElement

  /**
   * 按钮颜色，不支持渐变
   */
  color?: ColorValue

  /**
   * 按钮文案颜色
   * @default button_primary_color
   */
  textColor?: ColorValue

  /**
   * onPress debounce wait
   * @default 0
   */
  onPressDebounceWait?: number
}

export interface ButtonOptionProps
  extends Omit<TouchableHighlightProps, 'underlayColor' | 'activeOpacity'>,
    Pick<ButtonProps, 'text' | 'textStyle' | 'size' | 'hairline' | 'round'> {
  theme?: Partial<ButtonTheme>
  /**
   * 是否选中、高亮
   */
  active?: boolean

  /**
   * 选中状态文案颜色、背景色高亮
   * @default true
   */
  activeHighlight?: boolean

  /**
   * 显示的数量
   */
  badge?: React.ReactNode

  /**
   * 类型
   * @default 'hazy'
   */
  type?: 'hazy' | 'outline' | 'white'
}

export interface ButtonOptionGroupProps<TValue = any>
  extends Omit<SpaceProps, 'direction'> {
  theme?: Partial<ButtonTheme>
  /**
   * 选中状态文案颜色、背景色高亮
   * @default true
   */
  activeHighlight?: boolean

  /**
   * 类型
   * @default 'hazy'
   */
  type?: ButtonOptionProps['type']

  /**
   * 是否为圆形按钮
   * @default false
   */
  round?: boolean

  options: {
    value: TValue
    label: string
    disabled?: boolean
    badge?: React.ReactNode
  }[]

  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean

  value?: TValue | TValue[]

  defaultValue?: TValue | TValue[]

  onChange?: (
    value: TValue[] | TValue,
    options: {
      value: TValue
      label: string
      disabled?: boolean
      badge?: React.ReactNode
    }[],
  ) => void
  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean

  /**
   * 是否可滚动
   * @default false
   */
  scrollable?: boolean

  /**
   * 单选的情况下是否可以取消选择
   * @default true
   */
  deselect?: boolean
}
