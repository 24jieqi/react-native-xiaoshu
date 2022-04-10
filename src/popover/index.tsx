import { attachPropertiesToComponent } from '../helpers'

import Popover from './popover'
import PopoverItem from './popover-item'

export default attachPropertiesToComponent(Popover, {
  Item: PopoverItem,
})
