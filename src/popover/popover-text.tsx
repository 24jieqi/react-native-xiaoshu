import React, { memo } from 'react'
import { Text } from 'react-native'

import Theme from '../theme'

import type { PopoverTextProps } from './interface'
import PopoverItem from './popover-item'
import { varCreator, styleCreator } from './style'

const PopoverText: React.FC<PopoverTextProps> = ({
  text,
  onSelect,
  dark,
  disabled,
  divider = false,

  style,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  return (
    <PopoverItem
      value={text}
      onSelect={onSelect}
      disabled={disabled}
      divider={divider}
      dark={dark}>
      <Text
        {...restProps}
        style={[STYLES.text, dark ? STYLES.text_dark : null, style]}>
        {text}
      </Text>
    </PopoverItem>
  )
}

export default memo(PopoverText)
