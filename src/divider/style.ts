import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: themeVar.divider_margin_vertical,
    },

    border: {
      height: 0,
      // borderColor: '#000', // to test ui
      borderColor: themeVar.divider_border_color,
      flex: 1,
      maxWidth: 'auto',
    },

    border_left: {
      marginRight: themeVar.divider_margin_horizontal,
    },

    border_right: {
      marginLeft: themeVar.divider_margin_horizontal,
    },

    text: {
      color: themeVar.divider_text_color,
      fontSize: themeVar.divider_font_size,
      lineHeight: themeVar.divider_line_height,
    },
  })
}
