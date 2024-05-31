import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    nav_bar_arrow_size: 20,
    nav_bar_height: 44,
    nav_bar_gap: TOKENS.space_3,
    nav_bar_background_color: TOKENS.white,
    nav_bar_title_text_color: TOKENS.gray_8,
    nav_bar_title_font_size: TOKENS.font_size_5,
    nav_bar_icon_color: TOKENS.gray_8,
  }
}

export type NavBarTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: NavBarTheme) => {
  return StyleSheet.create({
    bar: {
      height: cv.nav_bar_height,
      width: '100%',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: cv.nav_bar_background_color,
      paddingHorizontal: cv.nav_bar_gap,
    },

    left: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: cv.nav_bar_gap,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
      // backgroundColor: '#f30', // to test ui
    },

    back_arrow: {
      color: cv.nav_bar_icon_color,
      // marginRight: cv.padding_base,
      height: cv.nav_bar_height,
      minWidth: cv.nav_bar_arrow_size,
      justifyContent: 'center',
      // backgroundColor: '#000', // to test ui
    },

    right: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: cv.nav_bar_gap,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 3,
    },

    title_text: {
      color: cv.nav_bar_title_text_color,
      textAlign: 'center',
      fontSize: cv.nav_bar_title_font_size,
      fontWeight: 'bold',
    },
  })
}
