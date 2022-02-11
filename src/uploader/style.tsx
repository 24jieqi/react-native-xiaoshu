import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    uploader: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    upload_text: {
      color: themeVar.uploader_upload_text_color,
      fontSize: themeVar.uploader_upload_text_font_size,
      lineHeight: themeVar.uploader_upload_text_line_height,
      marginTop: themeVar.uploader_upload_text_margin_top,
    },
  })
}
