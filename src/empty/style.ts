import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    empty: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    img: {
      width: themeVar.empty_image_width,
      height: themeVar.empty_image_height,
    },

    text: {
      color: themeVar.empty_text_color,
      fontSize: themeVar.empty_text_font_size,
      lineHeight: themeVar.empty_text_line_height,
    },
  })
}
