import type { ViewProps, ScrollViewProps } from 'react-native'

import type { TabBarProps } from '..'

export interface ElevatorNavProps extends ScrollViewProps {
  triggerOffset?: number
}
export interface ElevatorNavTabsProps extends TabBarProps {}

export interface ElevatorNavItemProps extends ViewProps {
  /** 唯一的title */
  title: string
}
