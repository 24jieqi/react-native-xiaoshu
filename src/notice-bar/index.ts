import { attachPropertiesToComponent } from '../helpers'

import NoticeBar from './notice-bar'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(NoticeBar, {
  varCreator,
  styleCreator,
})
