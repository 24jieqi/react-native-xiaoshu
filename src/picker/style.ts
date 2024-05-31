import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    picker_bottom_gap: TOKENS.space_4,
    picker_action_gap: TOKENS.space_3,
    picker_header_text_line_height: 44,
    picker_header_action_font_size: TOKENS.font_size_5,
    picker_header_cancel_text_color: TOKENS.gray_7,
    picker_header_confirm_text_color: TOKENS.brand_6,
    picker_header_reset_text_color: TOKENS.gray_7,
    picker_date_range_padding_vertical: TOKENS.space_3,
    picker_date_range_text_font_size: TOKENS.font_size_3,
    picker_date_range_text_color: TOKENS.gray_7,
    picker_date_range_text_line_height: 20,
    picker_date_range_day_margin_top: TOKENS.space_1,
    picker_date_range_day_font_size: TOKENS.font_size_5,
    picker_date_range_day_color: TOKENS.gray_5,
    picker_date_range_day_color_active: TOKENS.brand_6,
    picker_date_range_day_line_height: 22,
  }
}

export type PickerTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: PickerTheme) => {
  const headerBtn = {
    lineHeight: cv.picker_header_text_line_height,
    height: cv.picker_header_text_line_height,
    fontSize: cv.picker_header_action_font_size,
  }

  return StyleSheet.create({
    cancel_text: {
      ...headerBtn,
      color: cv.picker_header_cancel_text_color,
    },

    confirm_text: {
      ...headerBtn,
      color: cv.picker_header_confirm_text_color,
    },

    reset_text: {
      ...headerBtn,
      color: cv.picker_header_reset_text_color,
    },

    data_range: {
      flexDirection: 'row',
      paddingVertical: cv.picker_date_range_padding_vertical,
    },

    data_range_item: {
      flex: 1,
    },

    data_range_text: {
      fontSize: cv.picker_date_range_text_font_size,
      color: cv.picker_date_range_text_color,
      lineHeight: cv.picker_date_range_text_line_height,
      textAlign: 'center',
    },

    data_range_day: {
      marginTop: cv.picker_date_range_day_margin_top,
      fontSize: cv.picker_date_range_day_font_size,
      color: cv.picker_date_range_day_color,
      lineHeight: cv.picker_date_range_day_line_height,
      textAlign: 'center',
    },

    data_range_day_active: {
      color: cv.picker_date_range_day_color_active,
      fontWeight: 'bold',
    },
  })
}
