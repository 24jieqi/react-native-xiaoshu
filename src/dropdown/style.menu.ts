import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      height: themeVar.dropdown_menu_height,
      backgroundColor: themeVar.dropdown_menu_background_color,
    },
  })
}
