import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderStyle: 'solid',
      borderWidth: 1,
      paddingHorizontal: themeVar.padding_md,
      height: themeVar.button_default_height,
      backgroundColor: themeVar.button_default_background_color,
      borderColor: themeVar.button_default_border_color,
      borderRadius: themeVar.button_border_radius,
    },

    button_disabled: {
      opacity: themeVar.button_disabled_opacity,
    },

    button_border_width_hairline: {
      borderWidth: StyleSheet.hairlineWidth,
    },

    button_large: {
      height: themeVar.button_large_height,
    },

    button_normal: {
      height: themeVar.button_normal_height,
    },

    button_small: {
      height: themeVar.button_small_height,
    },

    button_mini: {
      height: themeVar.button_mini_height,
    },

    button_primary: {
      backgroundColor: themeVar.button_primary_background_color,
      borderColor: themeVar.button_primary_border_color,
    },

    button_success: {
      backgroundColor: themeVar.button_success_background_color,
      borderColor: themeVar.button_success_border_color,
    },

    button_warning: {
      backgroundColor: themeVar.button_warning_background_color,
      borderColor: themeVar.button_warning_border_color,
    },

    button_error: {
      backgroundColor: themeVar.button_error_background_color,
      borderColor: themeVar.button_error_border_color,
    },

    button_info: {
      backgroundColor: themeVar.button_info_background_color,
      borderColor: themeVar.button_info_border_color,
    },

    button_square: {
      borderRadius: 0,
    },

    button_round: {
      borderRadius: 9999,
    },

    text: {
      textAlign: 'center',
      fontSize: themeVar.button_default_font_size,
      color: themeVar.button_default_color,
    },

    text_large: {
      fontSize: themeVar.button_large_font_size,
    },

    text_normal: {
      fontSize: themeVar.button_normal_font_size,
    },

    text_small: {
      fontSize: themeVar.button_small_font_size,
    },

    text_mini: {
      fontSize: themeVar.button_mini_font_size,
    },

    text_primary: {
      color: themeVar.button_primary_color,
    },

    text_success: {
      color: themeVar.button_success_color,
    },

    text_warning: {
      color: themeVar.button_warning_color,
    },

    text_error: {
      color: themeVar.button_error_color,
    },

    text_info: {
      color: themeVar.button_info_color,
    },
  })
}
