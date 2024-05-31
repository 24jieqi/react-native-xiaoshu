import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    tag_l_close_icon: TOKENS.font_size_5,
    tag_l_height: 24,
    tag_l_font_size: TOKENS.font_size_3,
    tag_l_padding_horizontal: TOKENS.space_2,
    tag_m_close_icon: TOKENS.font_size_3,
    tag_m_height: 20,
    tag_m_font_size: TOKENS.font_size_2,
    tag_m_padding_horizontal: 4,
    tag_s_close_icon: TOKENS.font_size_2,
    tag_s_height: 16,
    tag_s_font_size: TOKENS.font_size_1,
    tag_s_padding_horizontal: 2,
    tag_padding_horizontal: TOKENS.space_1,
    tag_text_color: TOKENS.white,
    tag_border_radius: TOKENS.border_radius_xs,
    tag_primary_color: TOKENS.brand_6,
    tag_ghost_background_color: 'transparent',
    tag_hazy_lightness: 95,
  }
}

export type TagTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: TagTheme) => {
  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },
    tag_inner_l: {
      paddingHorizontal: cv.tag_l_padding_horizontal,
      height: cv.tag_l_height,
    },
    tag_inner_m: {
      paddingHorizontal: cv.tag_m_padding_horizontal,
      height: cv.tag_m_height,
    },
    tag_inner_s: {
      paddingHorizontal: cv.tag_s_padding_horizontal,
      height: cv.tag_s_height,
    },
    tag_inner: {
      borderRadius: cv.tag_border_radius,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tag_text_l: {
      fontSize: cv.tag_l_font_size,
    },
    tag_text_m: {
      fontSize: cv.tag_m_font_size,
    },
    tag_text_s: {
      fontSize: cv.tag_s_font_size,
    },
    close_icon_size_l: {
      fontSize: cv.tag_l_close_icon,
    },
    close_icon_size_m: {
      fontSize: cv.tag_m_close_icon,
    },
    close_icon_size_s: {
      fontSize: cv.tag_s_close_icon,
    },
  })
}
