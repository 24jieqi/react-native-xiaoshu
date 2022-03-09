import { attachPropertiesToComponent } from '../helpers'

import DropdownItem from './dropdown-item'
import DropdownMenu from './dropdown-menu'

export default attachPropertiesToComponent(DropdownMenu, {
  Item: DropdownItem,
})
