import { attachPropertiesToComponent } from '../helpers'

import Cell from './cell'
import CellGroup from './group'

export default attachPropertiesToComponent(Cell, {
  Group: CellGroup,
})
