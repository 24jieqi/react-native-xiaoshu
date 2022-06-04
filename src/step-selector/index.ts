import { attachPropertiesToComponent } from '../helpers'

import {
  Instance,
  Component,
  StepSelectorComponent,
} from './step-selector-instance'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Instance, {
  varCreator,
  styleCreator,
  Component,
  StepSelectorComponent,
})
