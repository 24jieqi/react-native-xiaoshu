import type { ViewProps, ScrollViewProps } from 'react-native'

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
}

export interface ElevatorNavAnchorProps extends ViewProps {
  /** 唯一的title */
  title: string
}
