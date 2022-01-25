import type { ViewProps } from 'react-native'

export type TagSize = 'l' | 'm' | 's'
export type TagType = 'primary' | 'hazy' | 'ghost'
export interface TagProps extends ViewProps {
  /**
   * 是否为可关闭标签
   * @default false
   */
  closable?: boolean
  /**
   * 关闭时的回调
   */
  onClose?: () => void
  /**
   * 大小
   * @default 'm'
   */
  size?: TagSize
  /**
   * 类型
   *
   * @default 'primary'
   */
  type?: TagType
  /**
   * 是否显示标签
   * @default true
   */
  visible?: boolean
  /**
   * 标签色
   */
  color?: string
  /**
   * 按钮文案颜色
   */
  textColor?: string
  /**
   * 自定义关闭按钮
   */
  closeIcon?: React.ReactNode
  /**
   * 设置图标
   */
  icon?: React.ReactNode
}
