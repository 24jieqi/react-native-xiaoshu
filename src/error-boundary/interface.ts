import type React from 'react'

export interface ErrorBoundaryProps {
  /**
   * 错误提示
   * @default '加载失败，请稍后再试~'
   */
  title?: string

  /**
   * 重新加载的文案
   * @default '重新加载'
   */
  reloadText?: string

  /**
   * 出错的时候回到
   */
  onError?: (e: Error, info: React.ErrorInfo) => void

  /**
   * 自定义渲染出错时的页面
   */
  renderError?: (option: {
    name: string
    message: string
    onReset: () => void
  }) => React.ReactNode
}
