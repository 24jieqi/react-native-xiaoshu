import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    text: {
      justifyContent: 'center',
    },

    text_text: {
      fontSize: themeVar.cell_font_size,
      color: themeVar.cell_value_text_color,
    },
  })
}
