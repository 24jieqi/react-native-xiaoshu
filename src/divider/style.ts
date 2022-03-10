import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    // Divider
    divider_vertical_min_height: 12,
    divider_color_dark: TOKENS.gray_4,
    divider_color_light: TOKENS.gray_2,
    divider_margin_horizontal: TOKENS.space_4,
    divider_text_color: TOKENS.gray_8,
    divider_font_size: TOKENS.font_size_4,
    divider_line_height: TOKENS.line_height_2,
    divider_content_left_width: '10%',
    divider_content_right_width: '10%',
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    divider_vertical: {
      flex: 1,
      minHeight: cv.divider_vertical_min_height,
      width: 1,
      // flexDirection: 'column',
      // alignItems: 'stretch',
    },

    text: {
      color: cv.divider_text_color,
      fontSize: cv.divider_font_size,
      lineHeight: cv.divider_line_height,
    },
  })
}
