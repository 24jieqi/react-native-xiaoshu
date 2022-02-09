import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    title: {
      paddingHorizontal: themeVar.cell_group_title_padding_horizontal,
      paddingTop: themeVar.cell_group_title_padding_top,
      paddingBottom: themeVar.cell_group_title_padding_bottom,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    text: {
      color: themeVar.cell_group_title_color,
      fontSize: themeVar.cell_group_title_font_size,
      lineHeight: themeVar.cell_group_title_line_height,
    },

    body_padding_horizontal: {
      paddingHorizontal: themeVar.cell_group_title_padding_horizontal,
    },
  })
}
