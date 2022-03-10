import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    dropdown_menu_height: 48,
    dropdown_menu_background_color: TOKENS.white,
    dropdown_menu_title_font_size: TOKENS.font_size_4,
    dropdown_menu_title_text_color: TOKENS.gray_8,
    dropdown_menu_title_active_text_color: TOKENS.brand_6,
    dropdown_menu_title_disabled_text_color: TOKENS.gray_6,
    dropdown_menu_title_padding_horizontal: TOKENS.space_1,
    dropdown_menu_title_line_height: TOKENS.line_height_1,
    dropdown_menu_title_icon_size: 12,
    dropdown_menu_option_active_color: TOKENS.brand_6,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    menu: {
      flexDirection: 'row',
      alignItems: 'center',
      height: cv.dropdown_menu_height,
      backgroundColor: cv.dropdown_menu_background_color,
    },
  })
}
