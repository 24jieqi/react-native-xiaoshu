import { attachPropertiesToComponent } from '../helpers'

import TabPane from './tab-pane'
import Tabs from './tabs'

export default attachPropertiesToComponent(Tabs, {
  TabPane: TabPane,
})
