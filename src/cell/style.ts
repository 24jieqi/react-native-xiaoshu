import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  const innerHeight = themeVar.cell_title_height

  return StyleSheet.create({
    cell: {
      backgroundColor: themeVar.cell_background_color,
    },

    cell_inner: {
      position: 'relative',
      marginHorizontal: themeVar.cell_group_title_padding_horizontal,
      paddingVertical: (themeVar.cell_mini_height - innerHeight) / 2,
      borderStyle: 'solid',
      borderBottomColor: themeVar.cell_border_color,
      borderBottomWidth: 0,
    },

    cell_inner_row: {
      flexDirection: 'row',
    },

    cell_inner_border: {
      borderBottomWidth: 1,
    },

    title: {
      position: 'relative',
      flexDirection: 'row',
      // alignItems: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    title_required: {
      position: 'absolute',
      left: -themeVar.padding_sm,
      height: innerHeight,
      width: themeVar.padding_sm,
      // backgroundColor: '#789', // to test ui
      alignItems: 'center',
      justifyContent: 'center',
    },

    title_required_text: {
      fontSize: themeVar.cell_font_size,
      color: themeVar.cell_required_color,
    },

    title_icon: {
      marginRight: themeVar.padding_base,
      color: themeVar.cell_icon_color,
      fontSize: themeVar.cell_icon_size,
      lineHeight: innerHeight,
    },

    title_text: {
      marginRight: themeVar.padding_md,
      minHeight: innerHeight,
      // backgroundColor: '#f30', // to test ui
      color: themeVar.cell_title_text_color,
      lineHeight: themeVar.cell_title_line_height,
      paddingVertical: (innerHeight - themeVar.cell_title_line_height) / 2,
    },

    value: {
      flex: 1,
    },

    value_text: {
      color: themeVar.cell_value_text_color,
      fontSize: themeVar.cell_font_size,
      lineHeight: themeVar.cell_title_line_height,
      paddingVertical: (innerHeight - themeVar.cell_title_line_height) / 2,
      // backgroundColor: '#f30', // to test ui
    },

    icon_link: {
      alignSelf: 'center',
      marginLeft: themeVar.padding_base,
      // backgroundColor: '#f30',
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
}
