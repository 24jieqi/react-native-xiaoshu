import { attachPropertiesToComponent } from '../helpers'

import ElevatorNavComponent from './elevator-nav'
import ElevatorNavItem from './elevator-nav-item'

export const ElevatorNav = attachPropertiesToComponent(ElevatorNavComponent, {
  ElevatorNavItem,
})
