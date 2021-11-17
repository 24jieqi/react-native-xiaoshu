import { StyleSheet, Platform } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    switch: {
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
      borderWidth: themeVar.switch_border_width,
      borderStyle: themeVar.switch_border_style,
      borderColor: themeVar.switch_border_color,
    },

    node: {
      backgroundColor: themeVar.switch_node_background_color,
      alignItems: 'center',
      justifyContent: 'center',
      ...Platform.select({
        android: {
          elevation: 2,
        },
        ios: {
          shadowColor: 'rgba(0,0,0,0.2)',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 1,
          shadowRadius: 2,
        },
      }),
    },

    disabled: {
      opacity: themeVar.switch_disabled_opacity,
    },
  })
}
