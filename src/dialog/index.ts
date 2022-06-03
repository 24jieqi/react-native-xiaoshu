import { attachPropertiesToComponent } from '../helpers'

import {
  Instance,
  confirm,
  input,
  Component,
  DialogComponent,
  Keyboard,
  KeyboardComponent,
} from './dialog-instance'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Instance, {
  varCreator,
  styleCreator,
  confirm,
  input,
  Component,
  DialogComponent,
  Keyboard,
  KeyboardComponent,
})
