import { attachPropertiesToComponent } from '../helpers'

import { varCreator, styleCreator } from './style'
import Tree, {
  findNodeByValue,
  findAllChildrenValue,
  findParentNodeByValue,
  findAllParentNodeByValue,
  flattenDeepWidthChildren,
  buildHighlightLabelConfig,
} from './tree'
import { TreeMultipleMode } from './var'

export default attachPropertiesToComponent(Tree, {
  varCreator,
  styleCreator,
  MultipleMode: TreeMultipleMode,
  findNodeByValue,
  findAllChildrenValue,
  findParentNodeByValue,
  findAllParentNodeByValue,
  flattenDeepWidthChildren,
  buildHighlightLabelConfig,
})
