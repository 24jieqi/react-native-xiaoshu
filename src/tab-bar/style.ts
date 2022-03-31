import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    tab_bar_item_padding_horizontal: TOKENS.space_2,
    tab_bar_text_font_size: TOKENS.font_size_1,
    tab_bar_text_alone_font_size: TOKENS.font_size_4,
    tab_bar_text_margin_top: TOKENS.space_1,
    tab_bar_text_color: TOKENS.gray_6,
    tab_bar_icon_color: TOKENS.gray_6,
    tab_bar_active_text_color: TOKENS.brand_6,
    tab_bar_active_icon_color: TOKENS.brand_6,
    tab_bar_indicator_color: TOKENS.brand_6,
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

    tab_bar_scroll: {
      height: '100%',
    },

    tab_bar_scroll_content: {
      paddingHorizontal: cv.tab_bar_item_padding_horizontal,
      alignItems: 'center',
    },

    item: {
      paddingHorizontal: cv.tab_bar_item_padding_horizontal,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },

    item_adaption: {
      flex: 1,
    },

    item_no_icon: {
      flexDirection: 'column',
      alignItems: 'center',
    },

    item_text: {
      fontSize: cv.tab_bar_text_alone_font_size,
    },

    item_text_full: {
      width: '100%',
      textAlign: 'center',
    },

    item_text_icon: {
      marginTop: cv.tab_bar_text_margin_top,
      fontSize: cv.tab_bar_text_font_size,
    },
  })
}
