import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    options: {
      flex: 1,
    },

    optionItem: {
      height: themeVar.select_popup_option_text_line_height,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    optionItemText: {
      flex: 1,
      lineHeight: themeVar.select_popup_option_text_line_height,
      fontSize: themeVar.font_size_h5,
      color: themeVar.text_color_1,
      // backgroundColor: '#f30', // to test ui
    },

    btn: {
      height: 60,
      justifyContent: 'center',
    },
  })
}
