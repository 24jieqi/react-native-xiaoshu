import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    notify_text_color: TOKENS.white,
    notify_padding_vertical: TOKENS.space_2,
    notify_padding_horizontal: TOKENS.space_4,
    notify_font_size: TOKENS.font_size_4,
    notify_line_height: TOKENS.line_height_1,
    notify_primary_background_color: TOKENS.brand_6,
    notify_success_background_color: TOKENS.green_6,
    notify_error_background_color: TOKENS.red_6,
    notify_warning_background_color: TOKENS.yellow_6,
  }
}

export type NotifyTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: NotifyTheme) => {
  return StyleSheet.create({
    notify: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: cv.notify_padding_horizontal,
      paddingVertical: cv.notify_padding_vertical,
    },

    text: {
      fontSize: cv.notify_font_size,
      lineHeight: cv.notify_line_height,
    },
  })
}
