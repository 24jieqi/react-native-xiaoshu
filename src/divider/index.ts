import { attachPropertiesToComponent } from '../helpers'

import Divider from './divider'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Divider, {
  varCreator,
  styleCreator,
})
