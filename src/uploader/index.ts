import { attachPropertiesToComponent } from '../helpers'

import Uploader from './uploader'
import UploaderRegular from './uploader-regular'

export default attachPropertiesToComponent(Uploader, {
  Regular: UploaderRegular,
})
