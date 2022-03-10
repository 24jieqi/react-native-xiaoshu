import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    button_xl_height: 52,
    button_xl_font_size: 18,
    button_xl_loading_size: 20,
    button_l_height: 44,
    button_l_font_size: 16,
    button_l_loading_size: 28,
    button_m_height: 40,
    button_m_font_size: 15,
    button_m_loading_size: 16,
    button_s_height: 32,
    button_s_font_size: 14,
    button_s_loading_size: 16,
    button_xs_height: 24,
    button_xs_font_size: 14,
    button_xs_loading_size: 16,
    button_xs_padding_horizontal: TOKENS.space_1,
    button_padding_horizontal: TOKENS.space_2,
    button_border_width: 1,
    button_border_color: TOKENS.gray_5,
    button_border_radius: TOKENS.border_radius_s,
    button_active_opacity: TOKENS.opacity_60,
    button_disabled_opacity: TOKENS.opacity_60,
    button_loading_opacity: TOKENS.opacity_60,
    button_primary_color: TOKENS.brand_6,
    button_danger_color: TOKENS.red_6,
    button_ghost_background_color: 'transparent',
    button_hazy_lightness: 95,
    button_icon_gap: TOKENS.space_1,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderStyle: 'solid',
      paddingHorizontal: cv.button_padding_horizontal,
      borderRadius: cv.button_border_radius,
    },

    button_disabled: {
      opacity: cv.button_disabled_opacity,
    },

    button_loading: {
      opacity: cv.button_loading_opacity,
    },

    button_xs_padding_horizontal: {
      paddingHorizontal: cv.button_xs_padding_horizontal,
    },

    button_square: {
      borderRadius: 0,
    },

    button_round: {
      borderRadius: 9999,
    },

    text: {
      textAlign: 'center',
    },
  })
}
