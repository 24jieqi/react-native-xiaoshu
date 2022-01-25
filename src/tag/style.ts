import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },
    tag_wrap_l: {
      paddingHorizontal: themeVar.tag_large_padding_horizontal,
      paddingVertical: themeVar.tag_large_padding_vertical,
    },
    tag_wrap_m: {
      paddingHorizontal: themeVar.tag_medium_padding_horizontal,
      paddingVertical: themeVar.tag_medium_padding_vertical,
    },
    tag_wrap_s: {
      paddingHorizontal: themeVar.tag_small_padding_horizontal,
      paddingVertical: themeVar.tag_small_padding_vertical,
    },
    tag_wrap: {
      borderRadius: themeVar.tag_border_radius,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tag_text_l: {
      fontSize: themeVar.tag_font_size_l,
    },
    tag_text_m: {
      fontSize: themeVar.tag_font_size_m,
    },
    tag_text_s: {
      fontSize: themeVar.tag_font_size_s,
    },
    close_icon_size_l: {
      fontSize: themeVar.tag_close_icon_l,
    },
    close_icon_size_m: {
      fontSize: themeVar.tag_close_icon_m,
    },
    close_icon_size_s: {
      fontSize: themeVar.tag_close_icon_s,
    },
  })
}
