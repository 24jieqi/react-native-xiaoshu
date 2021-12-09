import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    noticeBar: {
      paddingHorizontal: themeVar.notice_bar_padding_horizontal,
      paddingVertical: themeVar.notice_bar_padding_vertical,
      flexDirection: 'row',
    },
    text: {
      fontSize: themeVar.notice_bar_text_font_size,
      lineHeight: themeVar.notice_bar_text_line_height,
      flex: 1,
    },
  })
}
