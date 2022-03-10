import { StyleSheet } from 'react-native'

import type { ComponentVars } from './style'

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    title: {
      paddingHorizontal: cv.cell_group_title_padding_horizontal,
      paddingTop: cv.cell_group_title_padding_top,
      paddingBottom: cv.cell_group_title_padding_bottom,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    text: {
      color: cv.cell_group_title_color,
      fontSize: cv.cell_group_title_font_size,
      lineHeight: cv.cell_group_title_line_height,
    },

    body_padding_horizontal: {
      paddingHorizontal: cv.cell_group_title_padding_horizontal,
    },
  })
}
