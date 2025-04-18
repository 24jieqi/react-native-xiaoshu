import type { TextStyle } from 'react-native'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    tab_bar_item_padding_horizontal: TOKENS.space_2,
    tab_bar_text_font_size: TOKENS.font_size_1,
    tab_bar_text_alone_font_size: TOKENS.font_size_4,
    tab_bar_text_margin_top: TOKENS.space_1,
    tab_bar_text_color: TOKENS.gray_6,
    tab_bar_text_font_weight: 'normal' as TextStyle['fontWeight'],
    tab_bar_badge_font_size: TOKENS.font_size_4,
    tab_bar_badge_color: TOKENS.red_6,
    tab_bar_icon_color: TOKENS.gray_6,
    tab_bar_active_text_color: TOKENS.brand_6,
    tab_bar_active_text_font_weight: '500' as TextStyle['fontWeight'],
    tab_bar_active_icon_color: TOKENS.brand_6,
    tab_bar_indicator_color: TOKENS.brand_6,
  }
}

export type TabBarTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: TabBarTheme) => {
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

    tab_bar_scroll_content_label_bulge: {
      justifyContent: 'center',
      minWidth: '100%',
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

    item_text_badge: {
      fontSize: cv.tab_bar_badge_font_size,
      color: cv.tab_bar_badge_color,
    },
  })
}
