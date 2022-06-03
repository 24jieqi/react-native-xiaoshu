import { attachPropertiesToComponent } from '../helpers'

import Component from './action-sheet'
import { ActionSheet } from './action-sheet-instance'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(ActionSheet, {
  varCreator,
  styleCreator,
  Component,
})
