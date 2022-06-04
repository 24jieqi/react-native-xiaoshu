import { attachPropertiesToComponent } from '../helpers'

import NavBar from './nav-bar'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(NavBar, {
  varCreator,
  styleCreator,
})
