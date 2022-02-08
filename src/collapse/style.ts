import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    collapse: {
      overflow: 'hidden',
      // 避免子元素无法渲染
      minHeight: 20,
      backgroundColor: themeVar.collapse_background_color,
    },
    title_text: {
      lineHeight: themeVar.collapse_title_line_height,
      fontSize: themeVar.collapse_title_font_size,
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
