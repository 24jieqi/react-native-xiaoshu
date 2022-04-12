import React, { memo } from 'react'

import IconSvgCross from '../icon/cross'
import Theme from '../theme'

import type { TextInputClearProps } from './interface'
import { varCreator, styleCreator } from './style'

const TextInputClear: React.FC<TextInputClearProps> = ({ onPress }) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator, TOKENS)

  return (
    <IconSvgCross
      style={STYLES.clearable}
      color={CV.text_input_clearable_color}
      size={(CV.text_input_clearable_size / 4) * 3}
      onPress={onPress}
    />
  )
}

export default memo(TextInputClear)
