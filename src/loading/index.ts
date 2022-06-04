import { attachPropertiesToComponent } from '../helpers'

import Loading from './loading'
import LoadingCircular from './loading-circular'
import LoadingSpinner from './loading-spinner'
import { varCreator } from './style'

export default attachPropertiesToComponent(Loading, {
  varCreator,
  Circular: LoadingCircular,
  Spinner: LoadingSpinner,
})
