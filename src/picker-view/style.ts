import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    picker: {
      backgroundColor: themeVar.picker_view_background_color,
      // backgroundColor: '#f30',
      // borderRadius: themeVar.border_radius_md,
      overflow: 'hidden',
    },

    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,0.9)',
      zIndex: 2,
      justifyContent: 'center',
    },

    mask: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 3,
      backgroundColor: themeVar.picker_view_column_mask_background_color,
    },
  })
}
