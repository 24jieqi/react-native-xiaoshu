import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    text_input_xl_font_size: TOKENS.font_size_5,
    text_input_xl_min_height: 44,
    text_input_l_font_size: TOKENS.font_size_5,
    text_input_l_min_height: 40,
    text_input_m_font_size: TOKENS.font_size_5,
    text_input_m_min_height: 32,
    text_input_s_font_size: TOKENS.font_size_5,
    text_input_s_min_height: 24,
    text_input_selection_color: TOKENS.brand_6,
    text_input_placeholder_text_color: TOKENS.gray_5,
    text_input_color: TOKENS.gray_7,
    text_input_disabled_color: TOKENS.gray_6,
    text_input_disabled_background_color: TOKENS.gray_3,
    text_input_border_radio: TOKENS.border_radius_s,
    text_input_padding_horizontal: TOKENS.space_2,
    text_input_clearable_size: 16,
    text_input_clearable_background_color: TOKENS.gray_5,
    text_input_clearable_color: TOKENS.white,
    text_input_fix_text_color: TOKENS.gray_8,
    text_input_addon_text_color: TOKENS.gray_8,
    text_input_light_accessory_background_color: '#f7f7f7',
    text_input_dark_accessory_background_color: '#575757',
    text_input_dark_accessory_padding_horizontal: TOKENS.space_3,
    text_input_accessory_font_size: TOKENS.font_size_5,
    text_input_accessory_height: 44,
    text_input_accessory_text_color: TOKENS.brand_6,
    text_input_word_limit_text_font_size: TOKENS.font_size_3,
    text_input_word_limit_text_color: TOKENS.gray_7,
  }
}

export type TextInputTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: TextInputTheme, TOKENS: TokensType) => {
  return StyleSheet.create({
    input: {
      // flex: 1,
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'row',
      // backgroundColor: '#f30', // to test ui
    },

    input_border: {
      borderWidth: 1,
      borderRadius: cv.text_input_border_radio,
      borderColor: TOKENS.border_color,
    },

    input_disabled: {
      backgroundColor: cv.text_input_disabled_background_color,
    },

    text_input: {
      // flex: 1,
      flexGrow: 1,
      flexShrink: 1,
      paddingHorizontal: 0,
      paddingVertical: 0,
      margin: 0,
      borderWidth: 0,
      textAlignVertical: 'center',
      color: cv.text_input_color,
    },

    text_input_disabled: {
      color: cv.text_input_disabled_color,
    },

    input_fix_group: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: cv.text_input_padding_horizontal,
    },

    input_fix_text: {
      color: cv.text_input_fix_text_color,
    },

    input_fix_text_pre: {
      marginRight: cv.text_input_padding_horizontal,
    },

    input_fix_text_suf: {
      marginLeft: cv.text_input_padding_horizontal,
    },

    clearable: {
      alignSelf: 'center',
      width: cv.text_input_clearable_size,
      height: cv.text_input_clearable_size,
      borderRadius: cv.text_input_clearable_size / 2,
      backgroundColor: cv.text_input_clearable_background_color,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: cv.text_input_padding_horizontal,
    },

    addon_group: {
      // width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },

    addon_text: {
      color: cv.text_input_addon_text_color,
    },

    addon_text_before: {
      marginRight: cv.text_input_padding_horizontal,
    },

    addon_text_after: {
      marginLeft: cv.text_input_padding_horizontal,
    },

    word_limit_text: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      fontSize: cv.text_input_word_limit_text_font_size,
      color: cv.text_input_word_limit_text_color,
    },

    accessory: {
      width: '100%',
      height: cv.text_input_accessory_height,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderTopColor: TOKENS.border_color,
      borderTopWidth: 1,
    },

    accessory_text: {
      color: cv.text_input_accessory_text_color,
      fontSize: cv.text_input_accessory_font_size,
      paddingHorizontal: cv.text_input_dark_accessory_padding_horizontal,
      lineHeight: (cv.text_input_accessory_height / 3) * 2,
      fontWeight: 'bold',
    },
  })
}
