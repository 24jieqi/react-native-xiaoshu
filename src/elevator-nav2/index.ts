import { attachPropertiesToComponent } from '../helpers'

import ElevatorNavComponent from './elevator-nav'
import ElevatorNavAnchor from './elevator-nav-anchor'

export const ElevatorNav = attachPropertiesToComponent(ElevatorNavComponent, {
  anchor: ElevatorNavAnchor,
})
