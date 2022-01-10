import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    button_bar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: themeVar.button_bar_padding_horizontal,
    },

    button_bar_alone: {
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    },

    btn: {
      marginLeft: themeVar.button_bar_button_space,
      minWidth: 84,
    },
  })
}
