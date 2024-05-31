import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    nav_tab_background_color: TOKENS.gray_3,
    nav_tab_padding_vertical: 2,
    nav_tab_padding_horizontal: 2,
    nav_tab_padding_border_radius: TOKENS.border_radius_s,
    nav_tab_height: 32,
    nav_tab_item_min_width: 54,
    nav_tab_item_active_background_color: TOKENS.white,
    nav_tab_item_text_font_size: TOKENS.font_size_4,
    nav_tab_item_text_line_height: TOKENS.line_height_1,
    nav_tab_item_text_padding_vertical: 3,
    nav_tab_item_text_padding_horizontal: 12,
    nav_tab_item_text_color: TOKENS.gray_7,
    nav_tab_item_text_active_color: TOKENS.gray_8,
  }
}

export type NavTabTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: NavTabTheme) => {
  return StyleSheet.create({
    navWrapper: {
      flexDirection: 'row',
    },
    nav: {
      backgroundColor: cv.nav_tab_background_color,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: cv.nav_tab_padding_vertical,
      paddingHorizontal: cv.nav_tab_padding_horizontal,
      borderRadius: cv.nav_tab_padding_border_radius,
      height: cv.nav_tab_height,
    },
    item: {
      borderRadius: cv.nav_tab_padding_border_radius,
      minWidth: cv.nav_tab_item_min_width,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    itemActive: {
      backgroundColor: cv.nav_tab_item_active_background_color,
    },
    itemText: {
      fontSize: cv.nav_tab_item_text_font_size,
      lineHeight: cv.nav_tab_item_text_line_height,
      paddingVertical: cv.nav_tab_item_text_padding_vertical,
      paddingHorizontal: cv.nav_tab_item_text_padding_horizontal,
      color: cv.nav_tab_item_text_color,
    },
    itemTextActive: {
      color: cv.nav_tab_item_text_active_color,
    },
  })
}
