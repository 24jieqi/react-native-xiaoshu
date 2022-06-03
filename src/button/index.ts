import { attachPropertiesToComponent } from '../helpers'

import Button from './button'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Button, { varCreator, styleCreator })
