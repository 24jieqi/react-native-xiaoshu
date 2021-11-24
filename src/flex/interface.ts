import type { ReactNode } from 'react'
export interface FlexPropsType {
  /**
   * 项目定位方向
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /**
   * 子元素的换行方式
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /**
   * 子元素在主轴上的对齐方式
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around'
  /**
   * 子元素在交叉轴上的对齐方式
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  children?: ReactNode
  disabled?: boolean
}

export interface FlexItemPropsType {
  disabled?: boolean
  children?: ReactNode
}
