import { attachPropertiesToComponent } from '../helpers'

import IconBox from './icons/result-icon-box'
import IconEmpty from './icons/result-icon-empty'
import IconError from './icons/result-icon-error'
import IconWarning from './icons/result-icon-warning'
import Result from './result'
import { varCreator, styleCreator } from './style'

export default attachPropertiesToComponent(Result, {
  varCreator,
  styleCreator,
  IconBox: IconBox,
  IconEmpty: IconEmpty,
  IconError: IconError,
  IconWarning: IconWarning,
})
