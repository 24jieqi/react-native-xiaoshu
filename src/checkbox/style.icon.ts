import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    icon: {
      borderWidth: 1,
      borderColor: themeVar.checkbox_icon_border_color,
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    icon_disabled: {
      backgroundColor: themeVar.checkbox_disabled_background_color,
      borderColor: themeVar.checkbox_icon_border_color,
    },
  })
}
