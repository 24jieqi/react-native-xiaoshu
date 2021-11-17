import React, { useMemo, useRef, memo } from 'react'
import { View } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { getDefaultValue } from '../helpers'
import type { DropdownMenuProps } from './interface'
import { DropdownConfig } from './context'
import { createStyles } from './style.menu'

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
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  activeColor = getDefaultValue(
    activeColor,
    THEME_VAR.dropdown_menu_title_active_text_color,
  )
  duration = getDefaultValue(duration, THEME_VAR.animation_duration_fast)

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
