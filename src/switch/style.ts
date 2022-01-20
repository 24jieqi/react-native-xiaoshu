import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    switch: {
      justifyContent: 'center',
    },

    node: {
      backgroundColor: themeVar.switch_node_background_color,
      alignItems: 'center',
      justifyContent: 'center',
    },

    disabled: {
      opacity: themeVar.switch_disabled_opacity,
    },
  })
}
