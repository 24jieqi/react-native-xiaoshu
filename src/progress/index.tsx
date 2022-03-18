import { attachPropertiesToComponent } from '../helpers'

import Progress from './progress'
import ProgressPage from './progress-page'

export default attachPropertiesToComponent(Progress, {
  Page: ProgressPage,
})
