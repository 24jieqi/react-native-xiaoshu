import type { FC } from 'react'

import TabBar from '../tab-bar'

import type { ElevatorNavTabsProps } from './interface'

const ElevatorNavTabs: FC<ElevatorNavTabsProps> = props => {
  return props?.options?.length > 0 ? (
    <TabBar indicator safeAreaInsetBottom={false} {...props} />
  ) : null
}
export default ElevatorNavTabs
