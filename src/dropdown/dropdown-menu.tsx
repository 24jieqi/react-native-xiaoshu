import React, { useMemo, useRef, memo } from 'react'
import { View } from 'react-native'

import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import { DropdownConfig } from './context'
import type { DropdownMenuProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * DropdownMenu 下拉菜单的横条
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  titleStyle,
  titleTextStyle,
  iconStyle,
  activeColor,
  direction = 'down',
  lazyRender = true,
  duration,
  zIndex = 10,
  // overlay = true,
  // closeOnPressOverlay = true,
  closeOnPressOutside = true,
  style,
  ...restProps
}) => {
  const MenuRef = useRef<View>(null)
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  activeColor = getDefaultValue(
    activeColor,
    CV.dropdown_menu_title_active_text_color,
  )
  duration = getDefaultValue(duration, TOKENS.animation_duration_fast)

  const config = useMemo(
    () => ({
      titleStyle,
      titleTextStyle,
      iconStyle,
      activeColor,
      direction,
      lazyRender,
      duration,
      zIndex,
      closeOnPressOutside,
      MenuRef,
    }),
    [
      activeColor,
      closeOnPressOutside,
      direction,
      duration,
      iconStyle,
      lazyRender,
      titleStyle,
      titleTextStyle,
      zIndex,
    ],
  )

  return (
    <DropdownConfig.Provider value={config}>
      <View {...restProps} ref={MenuRef} style={[STYLES.menu, style]} />
    </DropdownConfig.Provider>
  )
}

export default memo<typeof DropdownMenu>(DropdownMenu)
