import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    icon: {
      width: themeVar.result_icon_size,
      height: themeVar.result_icon_size,
      borderRadius: themeVar.result_icon_size / 2,
      justifyContent: 'center',
    },

    titleText: {
      lineHeight: 24,
      fontSize: themeVar.result_title_font_size,
      color: themeVar.result_title_color,
      textAlign: 'center',
    },

    subtitleText: {
      lineHeight: 20,
      fontSize: themeVar.result_subtitle_font_size,
      color: themeVar.result_subtitle_color,
      textAlign: 'center',
    },
  })
}
