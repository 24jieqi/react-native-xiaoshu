import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    card_background_color: TOKENS.white,
    card_padding: TOKENS.space_3,
    card_header_gap: TOKENS.space_2,
    card_m_header_height: 50,
    card_m_header_text_font_size: TOKENS.font_size_7,
    card_m_header_text_line_height: TOKENS.line_height_2,
    card_m_border_radius: TOKENS.border_radius_m,
    card_s_header_height: 40,
    card_s_header_text_font_size: TOKENS.font_size_5,
    card_s_header_text_line_height: TOKENS.line_height_1,
    card_s_border_radius: TOKENS.border_radius_s,
    card_header_text_color: TOKENS.gray_8,
    card_footer_text_font_size: TOKENS.font_size_3,
    card_footer_text_color: TOKENS.gray_7,
    card_footer_text_line_height: 20,
    card_footer_padding_vertical: TOKENS.space_2,
  }
}

export type CardTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: CardTheme) => {
  return StyleSheet.create({
    card: {
      backgroundColor: cv.card_background_color,
      overflow: 'hidden',
    },

    card_radius_m: {
      borderRadius: cv.card_m_border_radius,
    },

    card_radius_s: {
      borderRadius: cv.card_s_border_radius,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: cv.card_padding,
      minHeight: cv.card_m_header_height,
    },

    header_s: {
      minHeight: cv.card_s_header_height,
    },

    title: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },

    title_text: {
      fontSize: cv.card_m_header_text_font_size,
      lineHeight: cv.card_m_header_text_line_height,
      color: cv.card_header_text_color,
      fontWeight: 'bold',
      marginRight: cv.card_header_gap,
      flex: 1,
    },

    title_text_s: {
      fontSize: cv.card_s_header_text_font_size,
      lineHeight: cv.card_s_header_text_line_height,
    },

    title_text_margin_left: {
      marginLeft: cv.card_header_gap,
    },

    footer: {
      // borderTopColor: cv.card_footer_top_border_color,
      // borderTopWidth: 1,
      paddingHorizontal: cv.card_padding,
      paddingVertical: cv.card_footer_padding_vertical,
    },

    footer_text: {
      fontSize: cv.card_footer_text_font_size,
      color: cv.card_footer_text_color,
      lineHeight: cv.card_footer_text_line_height,
    },
  })
}
