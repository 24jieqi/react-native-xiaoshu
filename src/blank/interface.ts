import type { ViewProps } from 'react-native'

import type { BlankTheme } from './style'

export interface BlankProps extends ViewProps {
  theme?: Partial<BlankTheme>

  /**
   * 上边距
   * @default false
   */
  top?: boolean | number

  /**
   * 下边距
   * @default false
   */
  bottom?: boolean | number

  /**
   * 左边距
   * @default true
   */
  left?: boolean | number

  /**
   * 右边距
   * @default true
   */
  right?: boolean | number

  /**
   * 默认留白大小
   * @default 'm'
   */
  size?: 's' | 'm' | 'l'

  /**
   * 边距类型
   * @default 'margin'
   */
  type?: 'margin' | 'padding'
}
