import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderStyle: 'solid',
      borderWidth: 1,
      paddingHorizontal: themeVar.padding_xs,
      borderRadius: themeVar.button_border_radius,
    },

    button_disabled: {
      opacity: themeVar.button_disabled_opacity,
    },

    button_border_width_hairline: {
      borderWidth: StyleSheet.hairlineWidth,
    },

    button_mini: {
      paddingHorizontal: themeVar.padding_base,
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
