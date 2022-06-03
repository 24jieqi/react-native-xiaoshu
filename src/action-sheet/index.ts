import { attachPropertiesToComponent } from '../helpers'

import {
  ActionSheetInstance,
  Component,
  ActionSheetComponent,
} from './action-sheet-instance'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(ActionSheetInstance, {
  varCreator,
  styleCreator,
  Component,
  ActionSheetComponent,
})
