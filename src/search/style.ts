import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    search: {
      backgroundColor: themeVar.search_background_color,
      paddingHorizontal: themeVar.search_padding_horizontal,
      paddingVertical: themeVar.search_padding_vertical,
      flexDirection: 'row',
      alignItems: 'center',
    },

    search_back: {
      paddingLeft: themeVar.padding_xs,
    },

    text_input: {
      marginLeft: themeVar.padding_xs,
    },

    text_input_group: {
      flex: 1,
      backgroundColor: themeVar.search_text_input_background_color,
      borderRadius: 4,
      marginRight: themeVar.padding_xs,
    },

    icon_back: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: themeVar.padding_xs,
      // backgroundColor: '#f30',
    },
  })
}
