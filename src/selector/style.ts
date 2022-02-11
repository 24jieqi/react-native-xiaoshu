import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    body: {
      flex: 1,
    },

    option_item: {
      paddingHorizontal: themeVar.selector_body_padding_horizontal,
      height: themeVar.selector_option_text_line_height,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    option_item_text: {
      flex: 1,
      lineHeight: themeVar.selector_option_text_line_height,
      fontSize: themeVar.selector_option_text_font_size,
      color: themeVar.selector_option_text_color,
      // backgroundColor: '#f30', // to test ui
    },

    btn: {
      height: 60,
      justifyContent: 'center',
      paddingHorizontal: themeVar.selector_body_padding_horizontal,
    },
  })
}
