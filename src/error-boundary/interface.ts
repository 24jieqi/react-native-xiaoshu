import type { PropsWithChildren, ReactNode, ErrorInfo } from 'react'

export interface ErrorBoundaryProps extends PropsWithChildren<{}> {
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
   * 出错时的回调函数
   */
  onError?: (e: Error, info: ErrorInfo) => void

  /**
   * 自定义渲染出错时的页面
   */
  renderError?: (option: {
    name: string
    message: string
    onReset: () => void
  }) => ReactNode
}
