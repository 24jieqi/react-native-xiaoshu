import { attachPropertiesToComponent } from '../helpers'

import Button from './button'
import ButtonOption from './button-option'
import ButtonOptionGroup from './button-option-group'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Button, {
  varCreator,
  styleCreator,
  Option: ButtonOption,
  OptionGroup: ButtonOptionGroup,
})
