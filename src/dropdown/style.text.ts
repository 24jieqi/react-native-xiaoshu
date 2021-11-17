import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: themeVar.dropdown_menu_title_font_size,
      paddingHorizontal: themeVar.dropdown_menu_title_padding_horizontal,
    },
  })
}
