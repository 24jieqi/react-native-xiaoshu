import type { ReactNode } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

import type { StepsTheme } from './style'
export interface StepsPropsType {
  theme?: Partial<StepsTheme>
  /**
   * 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态
   */
  current: number
  data?: Omit<StepsItemPropsType, 'index'>[]
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}

export interface StepsItemPropsType {
  theme?: Partial<StepsTheme>
  /**
   * 步骤图标的类型，可选
   */
  icon?: ReactNode
  /**
   * 步骤状态 wait|finish
   */
  status?: 'wait' | 'finish'
  /**
   * 标题
   */
  title?: ReactNode
  /**
   * 索引
   */
  index: number
}
