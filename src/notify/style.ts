import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    notify: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: themeVar.notify_padding_horizontal,
      paddingVertical: themeVar.notify_padding_vertical,
    },

    text: {
      fontSize: themeVar.notify_font_size,
      lineHeight: themeVar.notify_line_height,
    },
  })
}
