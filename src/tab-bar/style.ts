import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    tab_bar_text_font_size: TOKENS.font_size_1,
    tab_bar_text_margin_top: TOKENS.space_1,
    tab_bar_text_color: TOKENS.gray_6,
    tab_bar_icon_color: TOKENS.gray_6,
    tab_bar_active_text_color: TOKENS.brand_6,
    tab_bar_active_icon_color: TOKENS.brand_6,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    tab_bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    item: {
      flex: 1,
    },

    item_text: {
      textAlign: 'center',
      fontSize: cv.tab_bar_text_font_size,
      marginTop: cv.tab_bar_text_margin_top,
    },
  })
}
