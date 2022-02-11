import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    icon: {
      marginLeft: themeVar.popup_close_icon_margin_left,
    },
  })
}
