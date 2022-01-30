import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  const headerBtn = {
    lineHeight: themeVar.picker_title_text_line_height,
    height: themeVar.picker_title_text_line_height,
    fontSize: themeVar.picker_title_action_font_size,
  }

  return StyleSheet.create({
    cancel_text: {
      ...headerBtn,
      color: themeVar.picker_title_cancel_text_color,
    },

    confirm_text: {
      ...headerBtn,
      color: themeVar.picker_title_confirm_text_color,
    },
  })
}
