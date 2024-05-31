import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    progress_height: 4,
    progress_color: TOKENS.brand_6,
    progress_background_color: TOKENS.gray_3,
    progress_pivot_padding_horizontal: TOKENS.space_1,
    progress_pivot_text_color: TOKENS.white,
    progress_pivot_font_size: TOKENS.font_size_2,
    progress_pivot_line_height_scale: 1.6,
    progress_pivot_background_color: TOKENS.brand_6,
    progress_page_background_color: TOKENS.white,
    progress_page_text_font_size: TOKENS.font_size_4,
    progress_page_text_line_height: TOKENS.line_height_1,
    progress_page_text_color: TOKENS.gray_6,
    progress_page_button_width: 156,
  }
}

export type ProgressTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: ProgressTheme) => {
  return StyleSheet.create({
    fail_page: {
      backgroundColor: cv.progress_page_background_color,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: cv.progress_page_text_font_size,
      lineHeight: cv.progress_page_text_line_height,
      color: cv.progress_page_text_color,
    },
    btn: {
      width: cv.progress_page_button_width,
    },
  })
}
