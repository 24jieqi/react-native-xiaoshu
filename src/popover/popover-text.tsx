import React, { memo } from 'react'
import { Text } from 'react-native'

import { useThemeTokens, createVar, createStyle } from '../theme'

import type { PopoverTextProps } from './interface'
import PopoverItem from './popover-item'
import { varCreator, styleCreator } from './style'

const PopoverText: React.FC<PopoverTextProps> = ({
  text,
  onSelect,
  dark,

  style,
  ...restProps
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)

  return (
    <PopoverItem value={text} onSelect={onSelect}>
      <Text
        {...restProps}
        style={[STYLES.text, dark ? STYLES.text_dark : null, style]}>
        {text}
      </Text>
    </PopoverItem>
  )
}

export default memo<typeof PopoverText>(PopoverText)
