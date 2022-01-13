import type { TextInputProps } from '../text-input/interface'

export interface PasswordInputProps
  extends Omit<
    TextInputProps,
    | 'formatTrigger'
    | 'showWordLimit'
    | 'rows'
    | 'type'
    | 'secureTextEntry'
    | 'suffix'
  > {
  /**
   * @default true
   */
  secureTextEntry?: boolean

  /**
   * 图标大小
   * @default 20
   */
  iconSize?: number

  /**
   * 图标颜色
   * @default text_color_3
   */
  iconColor?: string
}
