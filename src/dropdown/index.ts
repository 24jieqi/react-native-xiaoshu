import { attachPropertiesToComponent } from '../helpers'

import { useDropdownConfig } from './context'
import DropdownItem from './dropdown-item'
import DropdownMenu from './dropdown-menu'
import DropdownPopup from './dropdown-popup'
import DropdownText from './dropdown-text'

export default attachPropertiesToComponent(DropdownMenu, {
  Item: DropdownItem,
  Text: DropdownText,
  Popup: DropdownPopup,
  useDropdownConfig,
})
