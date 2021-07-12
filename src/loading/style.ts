import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { LoadingProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  {
    size,
    color,
    textSize,
    vertical,
  }: Pick<LoadingProps, 'size' | 'color' | 'textSize' | 'vertical'>,
) => {
  size = size || themeVar.loading_spinner_size

  return StyleSheet.create({
    loading: {
      flexDirection: vertical ? 'column' : 'row',
      alignItems: 'center',
    },

    icon: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconText: {
      fontSize: size,
      color: color || themeVar.loading_spinner_color,
    },

    text: {
      fontSize: textSize || themeVar.loading_text_font_size,
      color: color || themeVar.loading_text_color,
      marginLeft: vertical ? 0 : themeVar.padding_xs,
      marginTop: vertical ? themeVar.padding_xs : 0,
    },
  })
}
