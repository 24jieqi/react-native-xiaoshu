import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    empty_image_width: 130,
    empty_image_height: 115,
    empty_icon_margin_bottom: TOKENS.space_2,
    empty_text_color: TOKENS.gray_6,
    empty_text_font_size: TOKENS.font_size_3,
    empty_text_line_height: TOKENS.line_height_1,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    empty: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    emptyFull: {
      flex: 1,
    },

    icon: {
      alignSelf: 'center',
      marginBottom: cv.empty_icon_margin_bottom,
    },

    text: {
      color: cv.empty_text_color,
      fontSize: cv.empty_text_font_size,
      lineHeight: cv.empty_text_line_height,
    },
  })
}
