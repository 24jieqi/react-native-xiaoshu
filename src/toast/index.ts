import { attachPropertiesToComponent } from '../helpers'

import { varCreator, styleCreator } from './style'
import {
  Instance,
  loading,
  success,
  fail,
  setDefaultOptions,
  resetDefaultOptions,
} from './toast-instance'

export default attachPropertiesToComponent(Instance, {
  varCreator,
  styleCreator,
  loading,
  success,
  fail,
  setDefaultOptions,
  resetDefaultOptions,
})
