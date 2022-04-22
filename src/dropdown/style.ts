import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    dropdown_active_color: TOKENS.brand_6,
    dropdown_background_color: TOKENS.white,
    dropdown_menu_height: 40,
    dropdown_text_font_size: TOKENS.font_size_4,
    dropdown_text_color: TOKENS.gray_7,
    dropdown_text_disabled_color: TOKENS.gray_6,
    dropdown_text_margin_right: 4,
    dropdown_text_icon_size: 16,
    dropdown_text_icon_color: TOKENS.gray_6,
    dropdown_badge_color: TOKENS.red_6,
    dropdown_badge_text_font_size: TOKENS.font_size_3,
    dropdown_badge_dot_size: 8,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      height: cv.dropdown_menu_height,
      backgroundColor: cv.dropdown_background_color,
    },

    item_cell_inner: {
      paddingLeft: 16,
      backgroundColor: cv.dropdown_background_color,
    },

    badge_dot: {
      backgroundColor: cv.dropdown_badge_color,
      width: cv.dropdown_badge_dot_size,
      height: cv.dropdown_badge_dot_size,
      borderRadius: cv.dropdown_badge_dot_size / 2,
      overflow: 'hidden',
    },

    badge_text: {
      color: cv.dropdown_badge_color,
      fontSize: cv.dropdown_badge_text_font_size,
    },

    text_item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text_text_container: {
      flexShrink: 1,
      maxWidth: '100%',
    },

    text_text: {
      width: '100%',
      fontSize: cv.dropdown_text_font_size,
    },

    text_text_gap: {
      marginRight: cv.dropdown_text_margin_right,
    },

    text_text_badge: {
      marginTop: -cv.dropdown_badge_dot_size,
      marginLeft: cv.dropdown_text_margin_right / 2,
    },
  })
}
