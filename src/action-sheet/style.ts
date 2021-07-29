import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    title: {
      flexShrink: 0,
      fontWeight: 'bold',
      fontSize: themeVar.action_sheet_header_font_size,
      lineHeight: themeVar.action_sheet_header_height,
      textAlign: 'center',
    },

    description: {
      flexShrink: 0,
      textAlign: 'center',
      color: themeVar.action_sheet_description_color,
      fontSize: themeVar.action_sheet_description_font_size,
      lineHeight: themeVar.action_sheet_description_line_height,
      paddingBottom: 14,
    },

    descriptionBox: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: themeVar.border_color,
    },

    descriptionAlone: {
      paddingTop: 14,
    },

    btn: {
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: themeVar.padding_md,
    },

    item: {
      textAlign: 'center',
      fontSize: themeVar.action_sheet_item_font_size,
      lineHeight: themeVar.action_sheet_loading_icon_size,
    },

    subname: {
      marginTop: themeVar.padding_xs,
      color: themeVar.action_sheet_subname_color,
      fontSize: themeVar.action_sheet_subname_font_size,
      lineHeight: themeVar.action_sheet_subname_line_height,
    },

    gap: {
      height: themeVar.action_sheet_cancel_padding_top,
      backgroundColor: themeVar.action_sheet_cancel_padding_color,
    },

    cancel: {
      flexShrink: 0,
      textAlign: 'center',
      color: themeVar.action_sheet_cancel_text_color,
      fontSize: themeVar.action_sheet_item_font_size,
      lineHeight: themeVar.action_sheet_loading_icon_size,
    },
  })
}
