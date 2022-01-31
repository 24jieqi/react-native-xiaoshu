import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  const headerBtn = {
    lineHeight: themeVar.picker_header_text_line_height,
    height: themeVar.picker_header_text_line_height,
    fontSize: themeVar.picker_header_action_font_size,
  }

  return StyleSheet.create({
    cancel_text: {
      ...headerBtn,
      color: themeVar.picker_header_cancel_text_color,
    },

    confirm_text: {
      ...headerBtn,
      color: themeVar.picker_header_confirm_text_color,
    },

    reset_text: {
      ...headerBtn,
      color: themeVar.picker_header_reset_text_color,
    },

    data_range: {
      flexDirection: 'row',
      paddingVertical: themeVar.picker_date_range_padding_vertical,
    },

    data_range_item: {
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },

    data_range_touch: {
      minWidth: 120,
    },

    data_range_text: {
      fontSize: themeVar.picker_date_range_text_font_size,
      color: themeVar.picker_date_range_text_color,
      lineHeight: themeVar.picker_date_range_text_line_height,
      textAlign: 'center',
    },

    data_range_day: {
      marginTop: themeVar.picker_date_range_day_margin_top,
      fontSize: themeVar.picker_date_range_day_font_size,
      color: themeVar.picker_date_range_day_color,
      lineHeight: themeVar.picker_date_range_day_line_height,
      textAlign: 'center',
    },

    data_range_day_active: {
      color: themeVar.picker_date_range_day_color_active,
      fontWeight: 'bold',
    },
  })
}
