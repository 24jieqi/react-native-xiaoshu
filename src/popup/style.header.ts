import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: themeVar.popup_header_padding_horizontal,
    },

    headerIcon: {
      width: themeVar.popup_header_height,
      height: themeVar.popup_header_height,
      alignContent: 'center',
      justifyContent: 'center',
    },

    closeStyle: {
      alignSelf: 'center',
    },

    headerText: {
      fontSize: themeVar.popup_header_font_size,
      textAlign: 'center',
      flex: 1,
      color: themeVar.popup_header_text_color,
    },
  })
}
