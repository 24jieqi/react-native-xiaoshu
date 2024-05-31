import { attachPropertiesToComponent } from '../helpers'

import { createStyle } from './create-style'
import { createVar } from './create-var'
import { dark } from './dark'
import Theme, { useThemeTokens } from './theme'
import { useStyle } from './useStyle'

export default attachPropertiesToComponent(Theme, {
  createStyle,
  createVar,
  useStyle,
  useThemeTokens,
  dark,
})
