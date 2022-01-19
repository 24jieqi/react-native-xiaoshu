import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  const headerBtn = {
    lineHeight: themeVar.picker_title_text_line_height,
    height: themeVar.picker_title_text_line_height,
    paddingHorizontal: themeVar.picker_title_text_padding_horizontal,
    fontSize: themeVar.picker_title_action_font_size,
  }

  return StyleSheet.create({
    picker: {
      backgroundColor: themeVar.picker_background_color,
      // backgroundColor: '#f30',
      borderRadius: themeVar.border_radius_md,
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

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    cancel_text: {
      ...headerBtn,
      color: themeVar.picker_title_cancel_text_color,
    },

    confirm_text: {
      ...headerBtn,
      color: themeVar.picker_title_confirm_text_color,
    },

    title_text: {
      ...headerBtn,
      color: themeVar.picker_title_text_color,
      fontWeight: 'bold',
      fontSize: themeVar.picker_title_font_size,
    },

    mask: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 3,
      backgroundColor: themeVar.picker_column_mask_background_color,
      borderColor: themeVar.picker_column_mask_border_color,
      borderWidth: 0,
    },
  })
}
