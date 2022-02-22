import { attachPropertiesToComponent } from '../helpers'

import DescriptionDate from './date'
import DescriptionDateRange from './date-range'
import Description from './description'
import DescriptionGroup from './group'
import { renderAlignCenter, renderDateRangeAlignFlexStart } from './render'
import DescriptionThousand from './thousand'

export default attachPropertiesToComponent(Description, {
  Group: DescriptionGroup,
  Thousand: DescriptionThousand,
  Date: DescriptionDate,
  DateRange: DescriptionDateRange,
  renderAlignCenter,
  renderDateRangeAlignFlexStart,
})
