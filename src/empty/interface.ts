import type React from 'react'
import type { StyleProp, ViewStyle, TextStyle, ViewProps } from 'react-native'

import type { EmptyTheme } from './style'

export interface EmptyProps extends Pick<ViewProps, 'testID'> {
  theme?: Partial<EmptyTheme>
  /**
   * 最外层 View 的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 文案文字样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 图标样式
   */
  iconStyle?: StyleProp<ViewStyle>

  /**
   * 自定义图标
   */
  icon?: React.ReactNode

  /**
   * 空数据提示文案
   * @default '暂无数据'
   */
  text?: React.ReactNode

  /**
   * 全屏填充
   * @default false
   */
  full?: boolean
}
