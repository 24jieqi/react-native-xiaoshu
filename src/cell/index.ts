import { attachPropertiesToComponent } from '../helpers'

import Cell from './cell'
import CellGroup from './cell-group'

export default attachPropertiesToComponent(Cell, {
  Group: CellGroup,
})
