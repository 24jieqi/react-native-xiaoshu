import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    card: {
      backgroundColor: themeVar.card_background_color,
    },

    card_radius: {
      borderRadius: themeVar.card_border_radius,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: themeVar.card_padding_horizontal,
      minHeight: themeVar.card_m_header_height,
    },

    header_s: {
      minHeight: themeVar.card_s_header_height,
    },

    title: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },

    title_text: {
      fontSize: themeVar.card_m_header_text_font_size,
      lineHeight: themeVar.card_m_header_text_line_height,
      color: themeVar.card_header_text_color,
      fontWeight: 'bold',
      marginRight: themeVar.card_header_gap,
    },

    title_text_s: {
      fontSize: themeVar.card_s_header_text_font_size,
      lineHeight: themeVar.card_s_header_text_line_height,
    },

    title_text_margin_left: {
      marginLeft: themeVar.card_header_gap,
    },

    body: {
      paddingHorizontal: themeVar.card_padding_horizontal,
      paddingVertical: themeVar.card_padding_horizontal,
    },

    footer: {
      // borderTopColor: themeVar.card_footer_top_border_color,
      // borderTopWidth: 1,
      paddingHorizontal: themeVar.card_padding_horizontal,
      paddingVertical: themeVar.card_footer_padding_vertical,
    },

    footer_text: {
      fontSize: themeVar.card_footer_text_font_size,
      color: themeVar.card_footer_text_color,
      lineHeight: themeVar.card_footer_text_line_height,
    },
  })
}
