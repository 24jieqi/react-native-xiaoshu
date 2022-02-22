import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    description: {},

    label: {},

    label_text: {
      color: themeVar.description_label_color,
    },

    content: {
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },

    content_text: {
      color: themeVar.description_text_color,
    },

    content_date_range: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    size_l_text: {
      fontSize: themeVar.description_l_font_size,
      lineHeight: themeVar.description_l_line_height,
    },

    size_m_text: {
      fontSize: themeVar.description_m_font_size,
      lineHeight: themeVar.description_m_line_height,
    },

    size_s_text: {
      fontSize: themeVar.description_s_font_size,
      lineHeight: themeVar.description_s_line_height,
    },
  })
}
