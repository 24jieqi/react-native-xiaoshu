import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    selector_min_height: 300,
    selector_option_text_line_height: 50,
    selector_option_text_font_size: TOKENS.font_size_4,
    selector_option_text_color: TOKENS.gray_8,
    selector_option_text_disabled_color: TOKENS.gray_6,
    selector_icon_selected_color: TOKENS.brand_6,
    selector_body_padding_horizontal: TOKENS.space_3,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    option_item: {
      paddingHorizontal: cv.selector_body_padding_horizontal,
      height: cv.selector_option_text_line_height,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    option_item_text: {
      flex: 1,
      lineHeight: cv.selector_option_text_line_height,
      fontSize: cv.selector_option_text_font_size,
      color: cv.selector_option_text_color,
      // backgroundColor: '#f30', // to test ui
    },

    option_item_text_disabled: {
      color: cv.selector_option_text_disabled_color,
    },
  })
}
