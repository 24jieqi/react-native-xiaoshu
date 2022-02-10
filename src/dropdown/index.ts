import { attachPropertiesToComponent } from '../helpers'

import DropdownItem from './item'
import DropdownMenu from './menu'

export default attachPropertiesToComponent(DropdownMenu, {
  Item: DropdownItem,
})
