import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    collapse: {
      overflow: 'hidden',
      backgroundColor: themeVar.collapse_background_color,
    },
    header_no_divider: {
      borderBottomWidth: 0,
    },
    title_text: {
      lineHeight: themeVar.collapse_title_line_height,
      fontSize: themeVar.collapse_title_font_size,
    },
    body: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    body_padding: {
      paddingHorizontal: themeVar.cell_padding_horizontal,
      paddingVertical: themeVar.cell_padding_horizontal,
    },
    divider: {
      marginHorizontal: themeVar.cell_padding_horizontal,
    },
  })
}
