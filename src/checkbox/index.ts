import { attachPropertiesToComponent } from '../helpers'

import Checkbox from './checkbox'
import CheckboxIcon from './checkbox-icon'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Checkbox, {
  varCreator,
  styleCreator,
  Icon: CheckboxIcon,
})
