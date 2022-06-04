import { attachPropertiesToComponent } from '../helpers'

import Steps from './steps'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Steps, { varCreator, styleCreator })
