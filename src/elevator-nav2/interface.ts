import type { ViewProps, ScrollViewProps } from 'react-native'

export interface ElevatorNavProps extends ScrollViewProps {
  /**
   * @default 100
   */
  triggerOffset?: number

  /**
   * @default 50
   */
  tabBarHeight?: number
}

export interface ElevatorNavAnchorProps extends ViewProps {
  /** 唯一的title */
  title: string
}
