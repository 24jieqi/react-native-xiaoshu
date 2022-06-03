import { attachPropertiesToComponent } from '../helpers'

import { useDropdownConfig } from './context'
import DropdownItem from './dropdown-item'
import DropdownMenu from './dropdown-menu'
import DropdownPopup from './dropdown-popup'
import DropdownText from './dropdown-text'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(DropdownMenu, {
  varCreator,
  styleCreator,
  Item: DropdownItem,
  Text: DropdownText,
  Popup: DropdownPopup,
  useDropdownConfig,
})
