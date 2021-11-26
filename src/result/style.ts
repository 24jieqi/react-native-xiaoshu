import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    result: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    icon: {
      width: themeVar.result_icon_size,
      height: themeVar.result_icon_size,
      borderRadius: themeVar.result_icon_size / 2,
      marginBottom: themeVar.padding_sm,
      justifyContent: 'center',
    },

    titleText: {
      marginBottom: themeVar.padding_sm,
      lineHeight: 24,
      fontSize: themeVar.result_title_font_size,
      color: themeVar.result_title_color,
      textAlign: 'center',
    },

    subtitleText: {
      marginBottom: themeVar.padding_sm,
      lineHeight: 20,
      fontSize: themeVar.result_subtitle_font_size,
      color: themeVar.result_subtitle_color,
      textAlign: 'center',
    },
  })
}
