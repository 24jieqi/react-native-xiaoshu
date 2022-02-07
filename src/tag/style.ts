import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },
    tag_inner_l: {
      paddingHorizontal: themeVar.tag_l_padding_horizontal,
      height: themeVar.tag_l_height,
    },
    tag_inner_m: {
      paddingHorizontal: themeVar.tag_m_padding_horizontal,
      height: themeVar.tag_m_height,
    },
    tag_inner_s: {
      paddingHorizontal: themeVar.tag_s_padding_horizontal,
      height: themeVar.tag_s_height,
    },
    tag_inner: {
      borderRadius: themeVar.tag_border_radius,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tag_text_l: {
      fontSize: themeVar.tag_l_font_size,
    },
    tag_text_m: {
      fontSize: themeVar.tag_m_font_size,
    },
    tag_text_s: {
      fontSize: themeVar.tag_s_font_size,
    },
    close_icon_size_l: {
      fontSize: themeVar.tag_l_close_icon,
    },
    close_icon_size_m: {
      fontSize: themeVar.tag_m_close_icon,
    },
    close_icon_size_s: {
      fontSize: themeVar.tag_s_close_icon,
    },
  })
}
