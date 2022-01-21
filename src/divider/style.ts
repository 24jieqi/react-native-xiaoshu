import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    text: {
      color: themeVar.divider_text_color,
      fontSize: themeVar.divider_font_size,
      lineHeight: themeVar.divider_line_height,
    },
  })
}
