import type { TextStyle } from 'react-native'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    badge_size: 16,
    badge_color: TOKENS.white,
    badge_padding_vertical: 0,
    badge_padding_horizontal: 3,
    badge_font_size: TOKENS.font_size_1,
    badge_font_weight: 'bold' as TextStyle['fontWeight'],
    badge_background_color: TOKENS.red_6,
    badge_count_border_radius: TOKENS.border_radius_max,
    badge_dot_size: 8,
    badge_status_primary: TOKENS.brand_6,
    badge_status_success: TOKENS.green_6,
    badge_status_warning: TOKENS.yellow_6,
    badge_status_error: TOKENS.red_6,
  }
}

export type BadgeTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: BadgeTheme) => {
  return StyleSheet.create({
    count: {
      minWidth: cv.badge_size,
      borderRadius: cv.badge_count_border_radius,
      paddingHorizontal: cv.badge_padding_horizontal,
      paddingVertical: cv.badge_padding_vertical,
    },

    count_text: {
      color: cv.badge_color,
      fontSize: cv.badge_font_size,
      fontWeight: cv.badge_font_weight,
      textAlign: 'center',
      height: cv.badge_size,
      lineHeight: cv.badge_size,
    },

    count_dot: {
      width: cv.badge_dot_size,
      height: cv.badge_dot_size,
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
          translateX: cv.badge_size / 2,
        },
        {
          translateY: -cv.badge_size / 2,
        },
      ],
    },

    count_dot_fixed: {
      transform: [
        {
          translateX: cv.badge_dot_size / 2,
        },
        {
          translateY: -cv.badge_dot_size / 2,
        },
      ],
    },
  })
}
