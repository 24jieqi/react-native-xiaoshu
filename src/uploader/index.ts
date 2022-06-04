import { attachPropertiesToComponent } from '../helpers'

import { varCreator, styleCreator } from './style'
import Uploader from './uploader'
import UploaderRegular from './uploader-regular'

export default attachPropertiesToComponent(Uploader, {
  varCreator,
  styleCreator,
  Regular: UploaderRegular,
})
