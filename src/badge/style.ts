import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    badge: {
      position: 'relative',
    },

    count: {
      minWidth: themeVar.badge_size,
      borderRadius: themeVar.border_radius_max,
      paddingHorizontal: themeVar.badge_padding_horizontal,
      paddingVertical: themeVar.badge_padding_vertical,
    },

    count_text: {
      color: themeVar.badge_color,
      fontSize: themeVar.badge_font_size,
      fontWeight: themeVar.badge_font_weight,
      textAlign: 'center',
      height: themeVar.badge_size,
      lineHeight: themeVar.badge_size,
    },

    count_dot: {
      width: themeVar.badge_dot_size,
      height: themeVar.badge_dot_size,
      minWidth: 0,
    },

    count_fixed: {
      position: 'absolute',
      right: 0,
      top: 0,
      // backgroundColor: '#f30', // to test ui
      zIndex: 2,
      transform: [
        {
          translateX: themeVar.badge_size / 2,
        },
        {
          translateY: -themeVar.badge_size / 2,
        },
      ],
    },

    count_dot_fixed: {
      transform: [
        {
          translateX: themeVar.badge_dot_size / 2,
        },
        {
          translateY: -themeVar.badge_dot_size / 2,
        },
      ],
    },
  })
}
