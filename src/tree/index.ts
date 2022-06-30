import { attachPropertiesToComponent } from '../helpers'

import { varCreator, styleCreator } from './style'
import Tree from './tree'
import { TreeMultipleMode } from './var'

export default attachPropertiesToComponent(Tree, {
  varCreator,
  styleCreator,
  MultipleMode: TreeMultipleMode,
})
