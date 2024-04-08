import type { ViewProps, PanResponderCallbacks } from 'react-native'

import type { ExcludeUndefined } from '../helpers/types'

export interface FloatingPanelProps extends ViewProps {
  /**
   * 起点
   */
  anchorStart?: number
  /**
   * 终点
   */
  anchorEnd?: number

  /**
   * 锚点变化
   */
  onChangeAnchor?: (anchor: number) => void

  /**
   * 标题
   */
  title?: React.ReactNode

  /**
   * 头部分割线
   * @default true
   */
  titleDivider?: boolean

  /**
   * 滑动偏移阈值，0~1
   * @default 0.2
   */
  offsetThreshold?: number

  /**
   * 层级
   * @default 10
   */
  zIndex?: number

  /**
   * 是否会处理面板内容区域的手势事件，禁用后则只能拖拽头部区域
   * @default true
   */
  draggingOnContent?: boolean

  /**
   * 当动画结束
   */
  onAnimationEnd?: (opened: boolean) => void

  /**
   * FloatingPanel.ScrollView 扩展判断回调函数
   */
  _onMoveShouldSetPanResponder?: (
    ...p: Parameters<
      ExcludeUndefined<PanResponderCallbacks['onMoveShouldSetPanResponder']>
    >
  ) => boolean | undefined
}

export interface FloatingPanelScrollViewProps
  extends Omit<FloatingPanelProps, '_onMoveShouldSetPanResponder'> {}
