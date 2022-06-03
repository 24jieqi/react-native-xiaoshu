import { attachPropertiesToComponent } from '../helpers'

import Empty from './empty'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Empty, { varCreator, styleCreator })
