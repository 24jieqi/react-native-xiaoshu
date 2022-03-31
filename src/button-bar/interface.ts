import type { BlankProps } from '../blank/interface'
import type { BottomBarProps } from '../bottom-bar/interface'
import type { ButtonProps } from '../button/interface'

export interface ButtonBarProps
  extends BottomBarProps,
    Pick<BlankProps, 'size'> {
  /**
   * 单独一个按钮
   * @default false
   */
  alone?: boolean

  /**
   * 配置方式的按钮
   */
  buttons?: (Omit<ButtonProps, 'onPress'> & {
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
}
