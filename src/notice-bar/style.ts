import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    notice_bar_m_padding_vertical: TOKENS.space_2,
    notice_bar_m_padding_horizontal: TOKENS.space_3,
    notice_bar_s_padding_vertical: TOKENS.space_1,
    notice_bar_s_padding_horizontal: TOKENS.space_2,
    notice_bar_text_line_height: TOKENS.line_height_1,
    notice_bar_border_radius: TOKENS.border_radius_s,
    notice_bar_text_font_size: TOKENS.font_size_3,
    notice_bar_icon_size: TOKENS.font_size_3,
    notice_bar_icon_margin_horizontal: TOKENS.space_1,
    notice_bar_primary_text_color: TOKENS.brand_6,
    notice_bar_success_text_color: TOKENS.green_6,
    notice_bar_warning_text_color: TOKENS.yellow_6,
    notice_bar_error_text_color: TOKENS.red_6,
    notice_bar_background_color_lightness: 95,
  }
}
export type NoticeBarTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: NoticeBarTheme) => {
  return StyleSheet.create({
    notice_bar: {
      flexDirection: 'row',
    },

    notice_bar_m: {
      paddingHorizontal: cv.notice_bar_m_padding_horizontal,
      paddingVertical: cv.notice_bar_m_padding_vertical,
    },

    notice_bar_s: {
      paddingHorizontal: cv.notice_bar_s_padding_horizontal,
      paddingVertical: cv.notice_bar_s_padding_vertical,
    },

    text: {
      fontSize: cv.notice_bar_text_font_size,
      lineHeight: cv.notice_bar_text_line_height,
      flex: 1,
    },
  })
}
