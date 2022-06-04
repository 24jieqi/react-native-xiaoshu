import { attachPropertiesToComponent } from '../helpers'

import Progress from './progress'
import ProgressPage from './progress-page'
import { varCreator } from './style'

export default attachPropertiesToComponent(Progress, {
  varCreator,
  Page: ProgressPage,
})
