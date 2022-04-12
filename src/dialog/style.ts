import type { TextStyle } from 'react-native'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    dialog_width: 300,
    dialog_transition: TOKENS.animation_duration_base,
    dialog_border_radius: TOKENS.border_radius_xl,
    dialog_background_color: TOKENS.white,
    dialog_header_font_weight: 'bold' as TextStyle['fontWeight'],
    dialog_header_line_height: TOKENS.line_height_2,
    dialog_header_margin_top: 30,
    dialog_header_font_size: TOKENS.font_size_7,
    dialog_message_margin_top: 12,
    dialog_message_padding_horizontal: TOKENS.space_6,
    dialog_message_font_size: TOKENS.font_size_5,
    dialog_message_line_height: TOKENS.line_height_1,
    dialog_message_text_color: TOKENS.gray_7,
    dialog_footer_margin_top: 32,
    dialog_footer_divider_color: TOKENS.gray_4,
    dialog_confirm_button_text_color: TOKENS.brand_6,
    dialog_cancel_button_text_color: TOKENS.gray_7,
    dialog_input_gap: TOKENS.space_4,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    dialog: {
      // position: 'absolute',
      marginTop: '-40%', // margin 是对话框的尺寸，不是屏幕宽度有关系？
      // width: width || cv.dialog_width,
      overflow: 'hidden',
      backgroundColor: cv.dialog_background_color,
      borderRadius: cv.dialog_border_radius,
    },

    title_text: {
      textAlign: 'center',
      marginTop: cv.dialog_header_margin_top,
      lineHeight: cv.dialog_header_line_height,
      fontWeight: cv.dialog_header_font_weight,
      fontSize: cv.dialog_header_font_size,
      paddingHorizontal: cv.dialog_message_padding_horizontal,
      // backgroundColor: '#f30',
    },

    content_isolated: {
      marginTop: cv.dialog_footer_margin_top - cv.dialog_message_margin_top,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    message_text: {
      paddingHorizontal: cv.dialog_message_padding_horizontal,
      marginTop: cv.dialog_message_margin_top,
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

    btn_confirm: {
      fontWeight: 'bold',
    },
  })
}
