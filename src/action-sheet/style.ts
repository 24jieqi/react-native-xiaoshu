import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    description: {
      flexShrink: 0,
      textAlign: 'center',
      color: themeVar.action_sheet_description_color,
      fontSize: themeVar.action_sheet_description_font_size,
      lineHeight: themeVar.action_sheet_description_line_height,
      paddingBottom: 12,
    },

    description_alone: {
      paddingTop: 12,
    },

    button_text: {
      fontSize: themeVar.action_sheet_text_font_size,
      fontWeight: 'bold',
    },

    gap: {
      height: themeVar.action_sheet_cancel_padding_top,
      backgroundColor: themeVar.action_sheet_cancel_padding_color,
    },
  })
}
