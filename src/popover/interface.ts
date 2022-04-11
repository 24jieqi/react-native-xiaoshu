import type React from 'react'
import type { StyleProp, ViewStyle, TextProps } from 'react-native'
import type { PopoverProps as RNPVProps } from 'react-native-popover-view/src/Types'
export interface PopoverItemProps<T> {
  value: T

  /**
   * 禁用选项
   */
  disabled?: boolean

  /**
   * 弹出层 深色 Popover 会覆盖该值
   */
  dark?: boolean

  style?: StyleProp<ViewStyle>
  /**
   * 是否显示分割线
   * @default false
   */
  divider?: boolean

  [key: string]: any
}

export interface PopoverProps<T>
  extends Omit<
    RNPVProps,
    'from' | 'isVisible' | 'animationConfig' | 'onRequestClose'
  > {
  /**
   * 卡片内容
   */
  content: React.ReactNode

  /**
   * 触发方式
   * @default 'onPress'
   */
  trigger?: 'onLongPress' | 'onPress' | 'onPressIn'

  /**
   * 弹出层 深色
   * @default false
   */
  dark?: boolean

  /**
   * 点击区域样式
   */
  triggerStyle?: StyleProp<ViewStyle>

  /**
   * 点击 Popover.Item 的回调
   */
  onSelect?: (node: T, index?: number) => void

  /**
   * 点击显示弹层是否禁用
   */
  disabled?: boolean

  /**
   * 自定义渲染弹出层
   */
  renderContentComponent?: (
    nodes: React.ReactNode,
    closePopover: () => void,
  ) => React.ReactNode

  /**
   * 弹出的动画过渡时间
   * @default animation_duration_base
   */
  duration?: number

  /**
   * 'rn-modal' mode on Android only.
   */
  statusBarTranslucent?: boolean
}

export interface PopoverTextProps extends TextProps {
  /**
   * 显示文案
   */
  text: string

  /**
   * 弹出层 深色 Popover 会覆盖该值
   */
  dark?: boolean

  /**
   * 是否显示分割线
   * @default false
   */
  divider?: boolean

  /**
   * 禁用选项
   */
  disabled?: boolean

  [key: string]: any
}
