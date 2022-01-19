import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    column: {
      flex: 1,
      position: 'relative',
    },

    touch: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 4,
    },

    text: {
      textAlign: 'center',
      fontSize: themeVar.picker_column_text_font_size,
      color: themeVar.picker_column_text_color,
    },

    text_disabled: {
      color: themeVar.picker_column_text_disabled_color,
    },
  })
}
