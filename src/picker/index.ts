import { attachPropertiesToComponent } from '../helpers'

import { Instance, Component, PickerComponent } from './picker-instance'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Instance, {
  varCreator,
  styleCreator,
  Component,
  PickerComponent,
})
