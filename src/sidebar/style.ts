import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    sidebar_background_color: TOKENS.white,
    sidebar_item_background_color: TOKENS.gray_3,
    sidebar_item_underlay_color: TOKENS.gray_4,
    sidebar_item_padding_vertical: TOKENS.space_3,
    sidebar_item_padding_horizontal: TOKENS.space_3,
    sidebar_item_border_radius: TOKENS.border_radius_m,
    sidebar_item_bar_width: 3,
    sidebar_item_bar_height: 26,
    sidebar_item_text_line_height: 20,
    sidebar_item_text_font_size: TOKENS.font_size_3,
    sidebar_item_bar_background_color: TOKENS.brand_6,
    sidebar_item_active_text_color: TOKENS.gray_8,
    sidebar_item_inactive_text_color: TOKENS.gray_7,
    sidebar_item_disabled_inactive_text_color: TOKENS.gray_5,
  }
}

export type SidebarTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: SidebarTheme) => {
  return StyleSheet.create({
    sidebar: {
      flex: 1,
    },

    sidebar_active: {
      backgroundColor: cv.sidebar_item_background_color,
    },

    scroll_view_empty: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    list: {
      backgroundColor: cv.sidebar_background_color,
    },

    item: {
      overflow: 'hidden',
      flexDirection: 'row',
    },

    item_bar: {
      position: 'absolute',
      backgroundColor: cv.sidebar_item_bar_background_color,
      left: -cv.sidebar_item_bar_width,
      top: '50%',
      marginTop: -cv.sidebar_item_bar_height / 2,
      width: cv.sidebar_item_bar_width * 2,
      height: cv.sidebar_item_bar_height,
      borderRadius: cv.sidebar_item_bar_width,
    },

    item_prev: {
      borderBottomRightRadius: cv.sidebar_item_border_radius,
    },

    item_next: {
      borderTopRightRadius: cv.sidebar_item_border_radius,
    },

    item_inactive: {
      backgroundColor: cv.sidebar_item_background_color,
    },

    item_inner: {
      paddingHorizontal: cv.sidebar_item_padding_horizontal,
      paddingVertical: cv.sidebar_item_padding_vertical,
    },

    item_text: {
      fontSize: cv.sidebar_item_text_font_size,
      lineHeight: cv.sidebar_item_text_line_height,
    },

    item_text_disabled: {
      color: cv.sidebar_item_disabled_inactive_text_color,
    },

    item_text_active: {
      color: cv.sidebar_item_active_text_color,
    },

    item_text_inactive: {
      color: cv.sidebar_item_inactive_text_color,
    },
  })
}
