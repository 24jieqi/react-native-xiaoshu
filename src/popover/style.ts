import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    popover_border_radius: TOKENS.border_radius_s,
    popover_color: TOKENS.white,
    popover_color_dark: TOKENS.gray_8,
    popover_item_padding_horizontal: TOKENS.space_3,
    popover_item_padding_vertical: TOKENS.space_3,
    popover_text_color: TOKENS.gray_8,
    popover_text_color_dark: TOKENS.white,
    popover_text_font_size: TOKENS.font_size_3,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    trigger: {
      alignItems: 'center',
    },

    content: {
      backgroundColor: cv.popover_color,
      borderRadius: cv.popover_border_radius,
      padding: 0,
      elevation: 3,
    },

    content_dark: {
      backgroundColor: cv.popover_color_dark,
    },

    arrow: {
      borderTopColor: cv.popover_color,
    },

    arrow_dark: {
      borderTopColor: cv.popover_color_dark,
    },

    background: {
      backgroundColor: 'transparent',
    },

    item: {
      paddingHorizontal: cv.popover_item_padding_horizontal,
      paddingVertical: cv.popover_item_padding_vertical,
    },

    text: {
      color: cv.popover_text_color,
      fontSize: cv.popover_text_font_size,
    },

    text_dark: {
      color: cv.popover_text_color_dark,
    },
  })
}
