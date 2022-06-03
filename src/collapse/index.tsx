import { attachPropertiesToComponent } from '../helpers'

import Collapse from './collapse'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Collapse, {
  varCreator,
  styleCreator,
})
