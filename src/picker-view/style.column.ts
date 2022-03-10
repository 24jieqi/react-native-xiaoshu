import { StyleSheet } from 'react-native'

import type { ComponentVars } from './style'

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    column: {
      flex: 1,
      position: 'relative',
    },

    touch: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 4,
    },

    text: {
      textAlign: 'center',
      fontSize: cv.picker_view_column_text_font_size,
      color: cv.picker_view_column_text_color,
    },

    text_disabled: {
      color: cv.picker_view_column_text_disabled_color,
    },
  })
}
