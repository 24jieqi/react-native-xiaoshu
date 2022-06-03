import { attachPropertiesToComponent } from '../helpers'

import Badge from './badge'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Badge, {
  varCreator,
  styleCreator,
})
