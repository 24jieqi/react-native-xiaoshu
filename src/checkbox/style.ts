import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: themeVar.checkbox_label_color,
      lineHeight: themeVar.checkbox_icon_size,
      minHeight: themeVar.checkbox_icon_size,
    },
    label_disabled: {
      color: themeVar.checkbox_disabled_label_color,
    },
  })
}
