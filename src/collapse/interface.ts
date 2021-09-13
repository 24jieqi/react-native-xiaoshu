import type React from 'react'

export interface CollapseProps {
  /**
   * 标题
   */
  title?: React.ReactNode

  /**
   * 自定义渲染标题
   */
  renderTitle?: (collapse: boolean) => React.ReactNode

  /**
   * 自定义渲染内容，替换 children
   */
  renderBody?: (collapse: boolean) => React.ReactNode

  /**
   * 是否展开
   */
  collapse?: boolean

  /**
   * 默认状态是否展开
   */
  defaultCollapse?: boolean

  /**
   * 状态改变的回调
   */
  onCollapse?: (collapse: boolean) => void

  /**
   * 动画结束的回调，注意组件渲染问题，会存在多次回调
   */
  onAnimationEnd?: (collapse: boolean) => void

  /**
   * 内容区域是否有内边距
   * @default true
   */
  bodyPadding?: boolean
}
