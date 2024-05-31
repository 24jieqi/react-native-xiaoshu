import type { BlankProps } from '../blank/interface'
import type { BottomBarProps } from '../bottom-bar/interface'
import type { ButtonProps } from '../button/interface'

import type { ButtonTheme } from './style'

export interface ButtonBarProps extends Omit<BottomBarProps, 'theme'> {
  theme?: Partial<ButtonTheme>
  /**
   * 单独一个按钮
   * @default false
   */
  alone?: boolean

  /**
   * 配置方式的按钮
   */
  buttons?: (Omit<ButtonProps, 'onPress' | 'text'> & {
    text: string
    hidden?: boolean
    onPress?: () => void
  })[]

  /**
   * 配置方式的按钮最大显示个数
   * @default 4
   */
  count?: number

  /**
   * 更多按钮文案
   * @default '更多'
   */
  moreText?: string

  /**
   * 左右留白大小
   * @default 'm'
   */
  blankSize?: BlankProps['size']
}

export interface ButtonBarConfirmProps
  extends Omit<ButtonBarProps, 'alone' | 'buttons' | 'count' | 'moreText'> {
  /**
   * 取消按钮，可以是多个按钮
   */
  cancel?: React.ReactNode
}
