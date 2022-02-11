import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    toast: {
      // backgroundColor: '#f30', // to test ui
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingTop: themeVar.toast_position_top_distance,
      paddingBottom: themeVar.toast_position_bottom_distance,
    },

    inner: {
      backgroundColor: themeVar.toast_background_color,
      borderRadius: themeVar.toast_border_radius,
      paddingHorizontal: themeVar.toast_inner_padding_horizontal,
      paddingVertical: themeVar.toast_inner_padding_vertical,
      maxWidth: themeVar.toast_max_width,
      minHeight: themeVar.toast_inner_min_height,
      width: themeVar.toast_inner_width,
      justifyContent: 'center',
    },

    inner_type_text: {
      borderRadius: themeVar.toast_text_border_radius,
      lineHeight: themeVar.toast_line_height,
      paddingHorizontal: themeVar.toast_text_padding_horizontal,
      paddingVertical: themeVar.toast_text_padding_vertical,
      minWidth: themeVar.toast_text_min_width,
      minHeight: 0,
      width: 'auto',
    },

    icon: {
      alignItems: 'center',
      padding: themeVar.toast_icon_padding,
    },

    text: {
      fontSize: themeVar.toast_font_size,
      color: themeVar.toast_text_color,
      textAlign: 'center',
      marginTop: themeVar.toast_text_margin_top,
    },

    text_top_0: {
      marginTop: 0,
    },
  })
}
