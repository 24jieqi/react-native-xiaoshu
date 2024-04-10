import type { ColorValue, ViewProps } from 'react-native'

export interface SwitchProps<ActiveValueT = any, InactiveValueT = any>
  extends Pick<ViewProps, 'testID'> {
  /**
   * 开关选中状态
   * @default false
   */
  value?: ActiveValueT | InactiveValueT

  /**
   * 默认值
   */
  defaultValue?: ActiveValueT | InactiveValueT

  /**
   * 是否为加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 是否为禁用状态
   * @default false
   */
  disabled?: boolean

  /**
   * 开关尺寸
   * @default switch_size
   */
  size?: number

  /**
   * 打开时的背景色
   */
  activeColor?: ColorValue

  /**
   * 关闭时的背景色
   */
  inactiveColor?: ColorValue

  /**
   * 打开时对应的值
   * @default true
   */
  activeValue?: ActiveValueT

  /**
   * 关闭时对应的值
   * @default false
   */
  inactiveValue?: InactiveValueT

  /**
   * 打开时的内容
   */
  activeChildren?: React.ReactNode

  /**
   * 关闭时的内容
   */
  inactiveChildren?: React.ReactNode

  /**
   * 点击时触发
   */
  onPress?: () => void

  /**
   * 开关状态切换时触发
   */
  onChange?: (v: ActiveValueT | InactiveValueT) => void

  /**
   * 切换状态前，返回 false 可阻止关闭，支持返回 Promise
   * @param v 切换后的值
   */
  beforeChange?: (
    v: ActiveValueT | InactiveValueT,
  ) => boolean | Promise<boolean>
}
