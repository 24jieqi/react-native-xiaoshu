import type { ViewProps } from 'react-native'

import type { BadgeProps } from '../badge/interface'

export type SidebarValue = string | number

export type SidebarOption = {
  label: string
  value: SidebarValue
  disabled?: boolean
  badge?: BadgeProps
}

export interface SidebarProps extends ViewProps {
  /**
   * 宽度
   * @default 88
   */
  width?: number

  /**
   * 当选项还在加载中时，可以用 loading 展示一个占位
   */
  loading?: boolean

  /**
   * 选项
   */
  options: SidebarOption[]

  /**
   * 当前激活 item 的 value
   */
  activeValue?: SidebarValue

  /**
   * 初始化选中 item 的 value
   */
  defaultActiveValue?: SidebarValue

  /**
   * 切换面板的回调
   */
  onChange?: (value: SidebarValue) => void
}
