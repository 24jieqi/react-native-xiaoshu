import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    bar: {
      height: themeVar.nav_bar_height,
      width: '100%',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: themeVar.nav_bar_background_color,
      paddingHorizontal: themeVar.padding_sm,
    },

    left: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: themeVar.padding_sm,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
      // backgroundColor: '#f30', // to test ui
    },

    back_arrow: {
      color: themeVar.nav_bar_icon_color,
      // marginRight: themeVar.padding_base,
      height: themeVar.nav_bar_height,
      minWidth: themeVar.nav_bar_arrow_size,
      justifyContent: 'center',
      // backgroundColor: '#000', // to test ui
    },

    right: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: themeVar.padding_sm,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },

    title_text: {
      color: themeVar.nav_bar_title_text_color,
      textAlign: 'center',
      fontSize: themeVar.nav_bar_title_font_size,
      fontWeight: 'bold',
    },
  })
}
