import type { PropsWithChildren, ReactNode } from 'react'
import type { ColorValue } from 'react-native'

export interface ProgressProps {
  /**
   * 进度百分比
   * @default 0
   */
  percentage?: number

  /**
   * 进度条粗细，默认单位为 px
   * @default progress_height
   */
  strokeWidth?: number

  /**
   * 进度条颜色
   * @default 主题色
   */
  color?: ColorValue

  /**
   * 轨道颜色
   *
   * @default '#e5e5e5'
   */
  trackColor?: ColorValue

  /**
   * 进度文字内容
   * @default 百分比
   */
  pivotText?: string

  /**
   * 进度文字背景色
   * @default 同进度条颜色
   */
  pivotColor?: ColorValue

  /**
   * 进度文字颜色
   * @default white
   */
  textColor?: ColorValue

  /**
   * 是否置灰
   * @default false
   */
  inactive?: boolean

  /**
   * 是否显示进度文字
   * @default true
   */
  showPivot?: boolean

  /**
   * 是否为方形按钮
   * @default false
   */
  square?: boolean

  /**
   * 是否开启进度条变动动画
   * @default false
   */
  animated?: boolean

  /**
   * 动画持续时间
   * @description animation_duration_base
   */
  animationDuration?: number

  /**
   * 动画结束的回调
   */
  onAnimationEnd?: (percentage: number) => void
}

export interface ProgressPageProps extends PropsWithChildren<{}> {
  /**
   * 页面是否在加载中
   * @default false
   */
  loading?: boolean

  /**
   * 默认起点进度
   * @default 10
   */
  defaultPercentage?: number

  /**
   * 背景色，默认会占满个屏幕
   * @default progress_page_background_color
   */
  backgroundColor?: string

  /**
   * 加载出错
   */
  fail?: boolean

  /**
   * 加载失败提示
   * @default '加载失败，请稍后再试～'
   */
  failMessage?: ReactNode

  /**
   * 自定义加载出错的图标
   */
  failIcon?: ReactNode

  /**
   * 加载失败点击重新加载
   */
  onPressReload?: () => void

  /**
   * 刷新按钮文案
   */
  refreshText?: string

  /**
   * 加载失败额外扩展区域
   */
  failExtra?: ReactNode

  /**
   * 额外的 loading
   */
  extraLoading?: ReactNode

  /**
   * 遮罩层的 zIndex
   * @default 1000
   */
  overlayZIndex?: number

  /**
   * 同步渲染 children
   * @default false
   */
  syncRenderChildren?: boolean
}
