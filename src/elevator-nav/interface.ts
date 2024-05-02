import type React from 'react'
import type { ViewProps, ScrollViewProps, ScrollView } from 'react-native'

export interface ElevatorNavProps extends ScrollViewProps {
  /**
   * 滚动大于多少时出现导航栏
   * @default 100
   */
  triggerOffset?: number

  /**
   * 导航栏高度，暂时未开放自定义导航功能
   * @default 40
   */
  tabBarHeight?: number

  /**
   * 自定义滚动组件
   */
  scrollComponent?: React.FC<
    // TODO 优化类型
    ScrollViewProps & { ref: React.MutableRefObject<ScrollView> }
  >
}

export interface ElevatorNavAnchorProps extends ViewProps {
  /** 唯一的 title */
  title: string
}
