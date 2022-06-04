import { attachPropertiesToComponent } from '../helpers'

import { Instance, Component, NotifyComponent } from './notify-instance'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Instance, {
  varCreator,
  styleCreator,
  Component,
  NotifyComponent,
})
