import { attachPropertiesToComponent } from '../helpers'

import Loading from './loading'
import LoadingCircular from './loading-circular'
import LoadingSpinner from './loading-spinner'

export default attachPropertiesToComponent(Loading, {
  Circular: LoadingCircular,
  Spinner: LoadingSpinner,
})
