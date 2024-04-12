import type { ColorValue } from 'react-native'

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
   * 安全输入
   * @default true
   */
  secureTextEntry?: boolean

  /**
   * 安全输入默认状态
   */
  defaultSecureTextEntry?: boolean

  /**
   * 安全输入状态变更
   */
  onChangeSecureTextEntry?: (v: boolean) => void

  /**
   * 图标大小
   * @default 20
   */
  iconSize?: number

  /**
   * 图标颜色
   * @default gray_6
   */
  iconColor?: ColorValue
}
