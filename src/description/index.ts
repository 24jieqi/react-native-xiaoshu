import { attachPropertiesToComponent } from '../helpers'

import Description from './description'
import DescriptionDate from './description-date'
import DescriptionDateRange from './description-date-range'
import DescriptionGroup from './description-group'
import DescriptionThousand from './description-thousand'
import { renderAlignCenter, renderDateRangeAlignFlexStart } from './render'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Description, {
  varCreator,
  styleCreator,
  Group: DescriptionGroup,
  Thousand: DescriptionThousand,
  Date: DescriptionDate,
  DateRange: DescriptionDateRange,
  renderAlignCenter,
  renderDateRangeAlignFlexStart,
})
