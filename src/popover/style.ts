import { StyleSheet, Platform } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    popover_border_radius: TOKENS.border_radius_s,
    popover_color: TOKENS.white,
    popover_color_dark: 'rgba(0,0,0,0.7)',
    popover_item_padding_horizontal: TOKENS.space_3,
    popover_item_padding_vertical: TOKENS.space_3,
    popover_item_divider: TOKENS.gray_2,
    popover_item_divider_dark: 'rgba(255,255,255,0.15)',
    popover_text_color: TOKENS.gray_8,
    popover_text_color_dark: TOKENS.white,
    popover_text_font_size: TOKENS.font_size_3,
  }
}

export type PopoverTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: PopoverTheme) => {
  return StyleSheet.create({
    trigger: {
      alignItems: 'center',
    },

    content: {
      backgroundColor: cv.popover_color,
      borderRadius: cv.popover_border_radius,
      paddingVertical: 0,
      paddingHorizontal: 0,
      elevation: 0,
    },

    content_shadow: {
      ...Platform.select({
        android: {
          elevation: 4,
        },
        ios: {
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
      }),
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

    item_inner: {
      marginHorizontal: cv.popover_item_padding_horizontal,
      paddingVertical: cv.popover_item_padding_vertical,
    },

    item_inner_divider: {
      borderBottomWidth: 1,
      borderBottomColor: cv.popover_item_divider,
    },

    item_inner_divider_dark: {
      borderBottomColor: cv.popover_item_divider_dark,
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
