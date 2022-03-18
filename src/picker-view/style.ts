import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    picker_view_background_color: TOKENS.white,
    picker_view_column_mask_background_color: 'rgba(255,255,255,0.8)',
    picker_view_column_text_color: TOKENS.gray_8,
    picker_view_column_text_disabled_color: TOKENS.gray_6,
    picker_view_column_text_font_size: TOKENS.font_size_5,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    picker: {
      backgroundColor: cv.picker_view_background_color,
      // backgroundColor: '#f30',
      // borderRadius: cv.border_radius_md,
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
      backgroundColor: cv.picker_view_column_mask_background_color,
    },
  })
}
