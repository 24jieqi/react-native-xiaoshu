export interface SwitchProps {
  /**
   * 开关选中状态
   * @default false
   */
  value: any

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
   */
  size?: number

  /**
   * 打开时的背景色
   */
  activeColor?: string

  /**
   * 关闭时的背景色
   */
  inactiveColor?: string

  /**
   * 打开时对应的值
   * @default true
   */
  activeValue?: any

  /**
   * 关闭时对应的值
   * @default false
   */
  inactiveValue?: any

  /**
   * 点击时触发
   */
  onPress?: Function

  /**
   * 开关状态切换时触发
   */
  onChange?: (v: any) => void

  /**
   * 切换状态前，返回 false 可阻止关闭，支持返回 Promise
   * @param v 切换后的值
   */
  beforeChange?: (v: any) => boolean | Promise<boolean>
}
