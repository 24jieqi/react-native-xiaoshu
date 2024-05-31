import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    description_l_font_size: TOKENS.font_size_5,
    description_l_line_height: TOKENS.line_height_4,
    description_m_font_size: TOKENS.font_size_4,
    description_m_line_height: TOKENS.line_height_2,
    description_s_font_size: TOKENS.font_size_4,
    description_s_line_height: TOKENS.line_height_1,
    description_label_color: TOKENS.gray_7,
    description_text_color: TOKENS.gray_8,
  }
}

export type DescriptionTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: DescriptionTheme) => {
  return StyleSheet.create({
    label_text: {
      color: cv.description_label_color,
    },

    content: {
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },

    content_text: {
      color: cv.description_text_color,
      flexShrink: 1,
      maxWidth: '100%',
    },

    content_date_range: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    size_l_text: {
      fontSize: cv.description_l_font_size,
      lineHeight: cv.description_l_line_height,
    },

    size_m_text: {
      fontSize: cv.description_m_font_size,
      lineHeight: cv.description_m_line_height,
    },

    size_s_text: {
      fontSize: cv.description_s_font_size,
      lineHeight: cv.description_s_line_height,
    },
  })
}
