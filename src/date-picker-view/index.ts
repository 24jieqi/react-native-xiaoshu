import { attachPropertiesToComponent } from '../helpers'

import DatePickerView from './date-picker-view'
import { formatDate } from './helper'

export default attachPropertiesToComponent(DatePickerView, {
  formatDate,
})
