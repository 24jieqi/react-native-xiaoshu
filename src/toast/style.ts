import type { DimensionValue } from 'react-native'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    toast_max_width: '70%' as DimensionValue,
    toast_background_color: `rgba(0,0,0,${TOKENS.opacity_70})`,
    toast_border_radius: TOKENS.border_radius_xl,
    toast_text_border_radius: TOKENS.border_radius_m,
    toast_icon_color: TOKENS.white,
    toast_icon_padding: TOKENS.space_1,
    toast_icon_size: 36,
    toast_inner_padding_vertical: TOKENS.space_4,
    toast_inner_padding_horizontal: TOKENS.space_4,
    toast_inner_width: 120,
    toast_inner_min_height: 120,
    toast_font_size: TOKENS.font_size_3,
    toast_text_color: TOKENS.white,
    toast_line_height: 20,
    toast_text_min_width: 96,
    toast_text_padding_vertical: TOKENS.space_2,
    toast_text_padding_horizontal: TOKENS.space_3,
    toast_text_margin_top: TOKENS.space_2,
    toast_position_top_distance: '20%' as DimensionValue,
    toast_position_bottom_distance: '20%' as DimensionValue,
  }
}

export type ToastTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: ToastTheme) => {
  return StyleSheet.create({
    toast: {
      // backgroundColor: '#f30', // to test ui
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingTop: cv.toast_position_top_distance,
      paddingBottom: cv.toast_position_bottom_distance,
    },

    inner: {
      backgroundColor: cv.toast_background_color,
      borderRadius: cv.toast_border_radius,
      paddingHorizontal: cv.toast_inner_padding_horizontal,
      paddingVertical: cv.toast_inner_padding_vertical,
      maxWidth: cv.toast_max_width,
      minHeight: cv.toast_inner_min_height,
      width: cv.toast_inner_width,
      justifyContent: 'center',
    },

    inner_type_text: {
      borderRadius: cv.toast_text_border_radius,
      lineHeight: cv.toast_line_height,
      paddingHorizontal: cv.toast_text_padding_horizontal,
      paddingVertical: cv.toast_text_padding_vertical,
      minWidth: cv.toast_text_min_width,
      minHeight: 0,
      width: 'auto',
    },

    icon: {
      alignItems: 'center',
      padding: cv.toast_icon_padding,
    },

    text: {
      fontSize: cv.toast_font_size,
      color: cv.toast_text_color,
      textAlign: 'center',
      marginTop: cv.toast_text_margin_top,
    },

    text_top_0: {
      marginTop: 0,
    },
  })
}
