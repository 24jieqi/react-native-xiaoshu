import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    wrapper: {
      height: themeVar.nav_bar_height,
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: themeVar.nav_bar_background_color,
      paddingHorizontal: themeVar.padding_md,
    },

    titleText: {
      color: themeVar.nav_bar_title_text_color,
      textAlign: 'center',
      fontSize: themeVar.nav_bar_title_font_size,
    },

    leftWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: themeVar.padding_md,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },

    leftText: {
      color: themeVar.nav_bar_icon_color,
      fontSize: 14,
    },

    leftArrow: {
      color: themeVar.nav_bar_icon_color,
      // marginRight: themeVar.padding_base,
      height: themeVar.nav_bar_height,
      minWidth: themeVar.nav_bar_arrow_size,
      justifyContent: 'center',
      // backgroundColor: '#000', // to test ui
    },

    rightWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: themeVar.padding_md,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },

    rightText: {
      color: themeVar.nav_bar_icon_color,
      fontSize: 14,
    },
  })
}
