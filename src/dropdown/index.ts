import { attachPropertiesToComponent } from '../helpers'

import { useDropdownConfig } from './context'
import DropdownItem from './dropdown-item'
import DropdownMenu from './dropdown-menu'
import DropdownMultiple from './dropdown-multiple'
import DropdownPopup from './dropdown-popup'
import DropdownText from './dropdown-text'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(DropdownMenu, {
  varCreator,
  styleCreator,
  Item: DropdownItem,
  Multiple: DropdownMultiple,
  Text: DropdownText,
  Popup: DropdownPopup,
  useDropdownConfig,
})
