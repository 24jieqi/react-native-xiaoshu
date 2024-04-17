import type { ViewProps } from 'react-native'

import type { SkeletonTheme } from './style'

export type SkeletonAvatarProps = {
  theme?: Partial<SkeletonTheme>
  /**
   * 是否展示动画效果
   * @default true
   */
  active?: boolean

  /**
   * 元素大小
   * @default 40
   */
  size?: number

  /**
   * 形状
   * @default 'circle'
   */
  shape?: 'circle' | 'square'
} & Pick<ViewProps, 'testID'>

export type SkeletonTitleProps = {
  /**
   * 设置标题占位图的宽度，百分比
   */
  width?: number
}

export type SkeletonParagraphProps = {
  theme?: Partial<SkeletonTheme>
  /**
   * 是否展示动画效果
   * @default true
   */
  active?: boolean

  /**
   * 设置段落占位图的行数
   */
  rows: number

  /**
   * 每行的宽
   */
  widths: number[]
} & Pick<ViewProps, 'testID'>

export interface SkeletonProps {
  theme?: Partial<SkeletonTheme>
  /**
   * 是否展示动画效果
   * @default true
   */
  active?: boolean

  /**
   * 为 true 时，显示占位图。反之则直接展示子组件
   */
  loading?: boolean

  /**
   * 是否显示头像占位图
   * @default false
   */
  avatar?: boolean | SkeletonAvatarProps

  /**
   * 是否显示标题占位图
   * @default true
   */
  title?: boolean | SkeletonTitleProps

  /**
   * 是否显示段落占位图
   * @default true
   */
  paragraph?: boolean | SkeletonParagraphProps
}
