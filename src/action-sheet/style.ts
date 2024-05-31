import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    action_sheet_description_color: TOKENS.gray_7,
    action_sheet_description_font_size: TOKENS.font_size_3,
    action_sheet_description_line_height: TOKENS.line_height_1,
    action_sheet_text_color: TOKENS.gray_8,
    action_sheet_text_font_size: TOKENS.font_size_5,
    action_sheet_cancel_padding_top: TOKENS.space_2,
    action_sheet_cancel_padding_color: TOKENS.gray_2,
  }
}

export type ActionSheetTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: ActionSheetTheme) => {
  return StyleSheet.create({
    description: {
      flexShrink: 0,
      textAlign: 'center',
      color: cv.action_sheet_description_color,
      fontSize: cv.action_sheet_description_font_size,
      lineHeight: cv.action_sheet_description_line_height,
      paddingBottom: 12,
    },

    description_alone: {
      paddingTop: 12,
    },

    button_text: {
      fontSize: cv.action_sheet_text_font_size,
      fontWeight: 'bold',
    },

    gap: {
      height: cv.action_sheet_cancel_padding_top,
      backgroundColor: cv.action_sheet_cancel_padding_color,
    },
  })
}
