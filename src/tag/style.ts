import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },

    inner: {
      overflow: 'hidden',
      flexBasis: 'auto',
      borderStyle: 'solid',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: themeVar.tag_border_radius,
    },

    border_width_hairline: {
      borderWidth: StyleSheet.hairlineWidth,
    },

    border_radius_round: {
      borderRadius: themeVar.tag_round_border_radius,
    },

    border_radius_large: {
      borderRadius: themeVar.tag_large_border_radius,
    },

    inner_mark: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: themeVar.tag_round_border_radius,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: themeVar.tag_round_border_radius,
    },

    padding_vertical_large: {
      paddingVertical: themeVar.tag_large_padding_vertical,
    },

    padding_vertical_medium: {
      paddingVertical: themeVar.tag_medium_padding_vertical,
    },

    padding_horizontal_large: {
      paddingHorizontal: themeVar.tag_large_padding_horizontal,
    },

    padding_horizontal_medium: {
      paddingHorizontal: themeVar.tag_medium_padding_horizontal,
    },

    text: {
      paddingHorizontal: themeVar.tag_padding_horizontal,
      fontSize: themeVar.tag_font_size,
    },

    font_size_large: {
      fontSize: themeVar.tag_large_font_size,
    },
  })
}
