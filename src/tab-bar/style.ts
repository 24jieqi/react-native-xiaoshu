import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    item: {
      flex: 1,
    },

    itemText: {
      textAlign: 'center',
      fontSize: themeVar.tab_bar_text_font_size,
      marginTop: themeVar.tab_bar_text_margin_top,
    },
  })
}
