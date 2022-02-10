import { attachPropertiesToComponent } from '../helpers'

import Checkbox from './checkbox'
import CheckboxIcon from './icon'

export default attachPropertiesToComponent(Checkbox, {
  Icon: CheckboxIcon,
})
