import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    sidebar: {
      flex: 1,
    },

    sidebar_active: {
      backgroundColor: themeVar.sidebar_item_background_color,
    },

    scroll_view_empty: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    list: {
      backgroundColor: themeVar.sidebar_background_color,
    },

    item: {
      overflow: 'hidden',
      flexDirection: 'row',
    },

    item_bar: {
      position: 'absolute',
      backgroundColor: themeVar.sidebar_item_bar_background_color,
      left: -themeVar.sidebar_item_bar_width,
      top: '50%',
      marginTop: -themeVar.sidebar_item_bar_height / 2,
      width: themeVar.sidebar_item_bar_width * 2,
      height: themeVar.sidebar_item_bar_height,
      borderRadius: themeVar.sidebar_item_bar_width,
    },

    item_prev: {
      borderBottomRightRadius: themeVar.sidebar_item_border_radius,
    },

    item_next: {
      borderTopRightRadius: themeVar.sidebar_item_border_radius,
    },

    item_inactive: {
      backgroundColor: themeVar.sidebar_item_background_color,
    },

    item_inner: {
      paddingHorizontal: themeVar.sidebar_item_padding_horizontal,
      paddingVertical: themeVar.sidebar_item_padding_vertical,
    },

    item_text: {
      fontSize: themeVar.sidebar_item_text_font_size,
      lineHeight: themeVar.sidebar_item_text_line_height,
    },

    item_text_active: {
      color: themeVar.sidebar_item_active_text_color,
    },

    item_text_inactive: {
      color: themeVar.sidebar_item_inactive_text_color,
    },
  })
}
