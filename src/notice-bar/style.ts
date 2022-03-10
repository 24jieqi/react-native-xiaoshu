import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    notice_bar_padding_vertical: TOKENS.space_2,
    notice_bar_padding_horizontal: TOKENS.space_4,
    notice_bar_text_line_height: TOKENS.line_height_1,
    notice_bar_text_font_size: TOKENS.font_size_3,
    notice_bar_icon_size: TOKENS.font_size_3,
    notice_bar_icon_margin_horizontal: TOKENS.space_2,
    notice_bar_primary_background_color: '#E6F0FF',
    notice_bar_primary_text_color: TOKENS.brand_6,
    notice_bar_success_background_color: '#EBFFF2',
    notice_bar_success_text_color: TOKENS.green_6,
    notice_bar_warning_background_color: '#FEEDE5',
    notice_bar_warning_text_color: TOKENS.yellow_6,
    notice_bar_error_background_color: '#FFEBEC',
    notice_bar_error_text_color: TOKENS.red_6,
  }
}
type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    noticeBar: {
      paddingHorizontal: cv.notice_bar_padding_horizontal,
      paddingVertical: cv.notice_bar_padding_vertical,
      flexDirection: 'row',
    },
    text: {
      fontSize: cv.notice_bar_text_font_size,
      lineHeight: cv.notice_bar_text_line_height,
      flex: 1,
    },
  })
}
