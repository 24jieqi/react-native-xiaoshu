import { CrossOutline } from '@fruits-chain/icons-react-native'
import React, { memo } from 'react'

import Theme from '../theme'

import type { TextInputClearProps } from './interface'
import { varCreator, styleCreator } from './style'

const TextInputClear: React.FC<TextInputClearProps> = ({ theme, onPress }) => {
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  return (
    <CrossOutline
      style={STYLES.clearable}
      color={CV.text_input_clearable_color}
      size={(CV.text_input_clearable_size / 4) * 3}
      onPress={onPress}
    />
  )
}

export default memo(TextInputClear)
