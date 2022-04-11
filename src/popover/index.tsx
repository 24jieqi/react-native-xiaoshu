import { attachPropertiesToComponent } from '../helpers'

import Popover from './popover'
import PopoverItem from './popover-item'
import PopoverText from './popover-text'

export default attachPropertiesToComponent(Popover, {
  Item: PopoverItem,
  Text: PopoverText,
})
