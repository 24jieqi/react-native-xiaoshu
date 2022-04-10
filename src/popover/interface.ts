import type { StyleProp, ViewStyle, TextProps } from 'react-native'
import type { PopoverProps as PopProps } from 'react-native-modal-popover'

export interface PopoverItemProps<T> {
  value: T
  [key: string]: any
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}

export interface PopoverProps<T> {
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
   * 箭头样式 通过 borderTopColor 隐藏箭头
   */
  arrowStyle?: StyleProp<ViewStyle>

  /**
   * 内容区域样式
   */
  contentStyle?: StyleProp<ViewStyle>

  /**
   * 点击 Popover.Item 的回调
   */
  onSelect?: (node: T, index?: number) => void

  /**
   * 弹出层，多个 Item 使用 JSX 数组
   */
  overlay: React.ReactNode

  /**
   * 点击显示弹层是否禁用
   */
  disabled?: boolean

  /**
   * 自定义渲染弹出层
   */
  renderOverlayComponent?: (
    nodes: React.ReactNode,
    closePopover: () => void,
  ) => React.ReactNode

  /**
   * 弹出的位置
   * @default 'auto'
   */
  placement?: PopProps['placement']

  /**
   * 弹出的动画过渡时间
   * @default animation_duration_base
   */
  duration?: number

  /**
   * 自定义动画
   */
  easing?: (show: boolean) => (value: number) => number
  /**
   * @default false
   */
  useNativeDriver?: boolean

  /**
   * Modal 的 onDismiss
   */
  onDismiss?: () => void

  /**
   * 计算状态栏，也可以自动状态栏高度
   */
  calculateStatusBar?: boolean | number
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

  [key: string]: any
}
