import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderStyle: 'solid',
      paddingHorizontal: themeVar.button_padding_horizontal,
      borderRadius: themeVar.button_border_radius,
    },

    button_disabled: {
      opacity: themeVar.button_disabled_opacity,
    },

    button_loading: {
      opacity: themeVar.button_loading_opacity,
    },

    button_xs_padding_horizontal: {
      paddingHorizontal: themeVar.button_xs_padding_horizontal,
    },

    button_square: {
      borderRadius: 0,
    },

    button_round: {
      borderRadius: 9999,
    },

    text: {
      textAlign: 'center',
    },
  })
}
