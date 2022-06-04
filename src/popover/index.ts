import { attachPropertiesToComponent } from '../helpers'

import Popover from './popover'
import PopoverItem from './popover-item'
import PopoverText from './popover-text'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Popover, {
  varCreator,
  styleCreator,
  Item: PopoverItem,
  Text: PopoverText,
})
