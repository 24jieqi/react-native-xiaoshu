import React, { memo } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { PopoverItemProps } from './interface'
import { varCreator, styleCreator } from './style'

const PopoverItem = <T,>({
  children,
  value,
  disabled,
  dark,
  style,
  divider = false,

  onSelect,
}: React.PropsWithChildren<PopoverItemProps<T>>) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const STYLES = createStyle(CV, styleCreator)

  return (
    <TouchableOpacity
      activeOpacity={CV_BUTTON.button_active_opacity}
      disabled={disabled}
      onPress={() => {
        if (typeof onSelect === 'function') {
          onSelect(value)
        }
      }}
      style={style}>
      <View
        style={[
          STYLES.item_inner,
          divider ? STYLES.item_inner_divider : null,
          dark ? STYLES.item_inner_divider_dark : null,
        ]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default memo<typeof PopoverItem>(PopoverItem) as <T>(
  p: React.PropsWithChildren<PopoverItemProps<T>>,
) => React.ReactElement
