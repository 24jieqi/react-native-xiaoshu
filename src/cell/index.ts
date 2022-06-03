import { attachPropertiesToComponent } from '../helpers'

import Cell from './cell'
import CellGroup from './cell-group'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Cell, {
  varCreator,
  styleCreator,
  Group: CellGroup,
})
