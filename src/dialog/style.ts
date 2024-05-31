import type { TextStyle } from 'react-native'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    dialog_width: 300,
    dialog_transition: TOKENS.animation_duration_base,
    dialog_border_radius: TOKENS.border_radius_xl,
    dialog_background_color: TOKENS.white,
    dialog_close_color: TOKENS.gray_8,
    dialog_close_size: 20,
    dialog_header_font_weight: 'bold' as TextStyle['fontWeight'],
    dialog_header_line_height: TOKENS.line_height_3,
    dialog_header_padding_top: TOKENS.space_6,
    dialog_header_padding_bottom: TOKENS.space_4,
    dialog_header_font_size: TOKENS.font_size_7,
    dialog_header_color: TOKENS.gray_8,
    dialog_message_padding_horizontal: TOKENS.space_6,
    dialog_message_font_size: TOKENS.font_size_5,
    dialog_message_line_height: TOKENS.line_height_1,
    dialog_message_text_color: TOKENS.gray_7,
    dialog_footer_margin_top: TOKENS.space_4,
    dialog_footer_divider_color: TOKENS.gray_4,
    dialog_confirm_button_text_color: TOKENS.brand_6,
    dialog_cancel_button_text_color: TOKENS.gray_8,
    dialog_input_gap: TOKENS.space_4,
  }
}

export type DialogTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: DialogTheme) => {
  return StyleSheet.create({
    dialog: {
      overflow: 'hidden',
      backgroundColor: cv.dialog_background_color,
      borderRadius: cv.dialog_border_radius,
    },

    close: {
      position: 'absolute',
      right: cv.dialog_border_radius,
      top: cv.dialog_border_radius,
      zIndex: 2,
    },

    title_text: {
      textAlign: 'center',
      lineHeight: cv.dialog_header_line_height,
      fontWeight: cv.dialog_header_font_weight,
      fontSize: cv.dialog_header_font_size,
      paddingHorizontal: cv.dialog_message_padding_horizontal,
      paddingTop: cv.dialog_header_padding_top,
      paddingBottom: cv.dialog_header_padding_bottom,
      color: cv.dialog_header_color,
      // backgroundColor: '#f30',
    },

    title_isolated: {
      paddingBottom: 0,
    },

    content_isolated: {
      paddingTop: cv.dialog_header_padding_top,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    message_text: {
      paddingHorizontal: cv.dialog_message_padding_horizontal,
      fontSize: cv.dialog_message_font_size,
      lineHeight: cv.dialog_message_line_height,
      color: cv.dialog_message_text_color,
      // backgroundColor: '#f30',
    },

    footer: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: cv.dialog_footer_divider_color,
      marginTop: cv.dialog_footer_margin_top,
    },

    btn: {
      flex: 1,
      marginHorizontal: 0,
      marginVertical: 0,
    },

    btn_text_bold: {
      fontWeight: 'bold',
    },
  })
}
