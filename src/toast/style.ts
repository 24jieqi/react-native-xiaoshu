import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { ToastProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  { position }: Pick<ToastProps, 'position'>,
) => {
  return StyleSheet.create({
    toast: {
      // backgroundColor: '#f30', // to test ui
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent:
        position === 'top'
          ? 'flex-start'
          : position === 'bottom'
          ? 'flex-end'
          : 'center',
      paddingTop: themeVar.toast_position_top_distance,
      paddingBottom: themeVar.toast_position_bottom_distance,
    },

    inner: {
      backgroundColor: themeVar.toast_background_color,
      borderRadius: themeVar.toast_border_radius,
      paddingHorizontal: themeVar.toast_default_horizontal_padding,
      paddingVertical: themeVar.toast_default_vertical_padding,
      maxWidth: themeVar.toast_max_width,
      minHeight: themeVar.toast_default_min_height,
      width: themeVar.toast_default_width,
      justifyContent: 'center',
    },

    innerText: {
      lineHeight: themeVar.toast_line_height,
      paddingHorizontal: themeVar.toast_text_horizontal_padding,
      paddingVertical: themeVar.toast_text_vertical_padding,
      minWidth: themeVar.toast_text_min_width,
      minHeight: 0,
      width: 'auto',
    },

    loading: {
      alignItems: 'center',
      padding: themeVar.padding_base,
    },

    text: {
      fontSize: themeVar.toast_font_size,
      color: themeVar.toast_text_color,
      textAlign: 'center',
      marginTop: themeVar.padding_xs,
    },

    textTop0: {
      marginTop: 0,
    },
  })
}
