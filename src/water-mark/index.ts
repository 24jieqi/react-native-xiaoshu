import { attachPropertiesToComponent } from '../helpers'

import { varCreator } from './style'
import WaterMark from './water-mark'

export default attachPropertiesToComponent(WaterMark, {
  varCreator,
})
