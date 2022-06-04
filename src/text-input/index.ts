import { attachPropertiesToComponent } from '../helpers'

import { varCreator, styleCreator } from './style'
import TextInput from './text-input'

export default attachPropertiesToComponent(TextInput, {
  varCreator,
  styleCreator,
})
