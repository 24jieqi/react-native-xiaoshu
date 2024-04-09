import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    result_success_color: TOKENS.green_6,
    result_error_color: TOKENS.red_6,
    result_info_color: TOKENS.brand_6,
    result_warning_color: TOKENS.yellow_6,
    result_icon_size: 72,
    result_title_font_size: TOKENS.font_size_7,
    result_title_color: TOKENS.gray_8,
    result_subtitle_font_size: TOKENS.font_size_3,
    result_subtitle_color: TOKENS.gray_7,
  }
}

export type ResultTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: ResultTheme) => {
  return StyleSheet.create({
    icon: {
      width: cv.result_icon_size,
      height: cv.result_icon_size,
      borderRadius: cv.result_icon_size / 2,
      justifyContent: 'center',
      alignSelf: 'center',
    },

    titleText: {
      lineHeight: 24,
      fontSize: cv.result_title_font_size,
      color: cv.result_title_color,
      textAlign: 'center',
    },

    subtitleText: {
      lineHeight: 20,
      fontSize: cv.result_subtitle_font_size,
      color: cv.result_subtitle_color,
      textAlign: 'center',
    },
  })
}
