import { attachPropertiesToComponent } from '../helpers'

import { varCreator, styleCreator } from './style'
import Switch from './switch'

export default attachPropertiesToComponent(Switch, {
  varCreator,
  styleCreator,
})
