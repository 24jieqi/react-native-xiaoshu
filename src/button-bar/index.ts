import { attachPropertiesToComponent } from '../helpers'

import ButtonBar from './button-bar'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(ButtonBar, {
  varCreator,
  styleCreator,
})
