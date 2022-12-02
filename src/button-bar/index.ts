import { attachPropertiesToComponent } from '../helpers'

import ButtonBar from './button-bar'
import ButtonBarConfirm from './button-bar-confirm'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(ButtonBar, {
  varCreator,
  styleCreator,
  Confirm: ButtonBarConfirm,
})
