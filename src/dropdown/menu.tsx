import React, { useMemo, memo } from 'react'
import { View } from 'react-native'

import { useTheme } from '../theme'
import type { DropdownMenuProps } from './interface'
import { DropdownConfig } from './context'
import { createStyles } from './style.menu'

/**
 * DropdownMenu 下拉菜单的横条
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  top,
  activeColor,
  direction = 'down',
  zIndex = 10,
  duration = 200,
  overlay = true,
  closeOnPressOverlay = true,
  closeOnPressOutside = true,
  children,
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar)

  const config = useMemo(
    () => ({
      top,
      activeColor:
        activeColor || themeVar.dropdown_menu_title_active_text_color,
      direction,
      zIndex,
      duration,
      overlay,
      closeOnPressOverlay,
      closeOnPressOutside,
    }),
    [
      themeVar.dropdown_menu_title_active_text_color,
      top,
      activeColor,
      direction,
      zIndex,
      duration,
      overlay,
      closeOnPressOverlay,
      closeOnPressOutside,
    ],
  )

  return (
    <DropdownConfig.Provider value={config}>
      <View style={Styles.menu}>{children}</View>
    </DropdownConfig.Provider>
  )
}

export default memo<typeof DropdownMenu>(DropdownMenu)
