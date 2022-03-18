import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    cell_group_title_padding_horizontal: TOKENS.space_3,
    cell_group_title_padding_top: TOKENS.space_2,
    cell_group_title_padding_bottom: TOKENS.space_2,
    cell_group_title_color: TOKENS.gray_8,
    cell_group_title_font_size: TOKENS.font_size_5,
    cell_group_title_line_height: 28,
    cell_icon_size: TOKENS.font_size_5,
    cell_icon_color: TOKENS.gray_6,
    cell_active_color: TOKENS.gray_1,
    cell_font_size: TOKENS.font_size_5,
    cell_background_color: TOKENS.white,
    cell_padding_vertical: TOKENS.space_3,
    cell_padding_horizontal: TOKENS.space_3,
    cell_mini_height: 50,
    cell_title_text_color: TOKENS.gray_8,
    cell_title_height: 32,
    cell_title_line_height: TOKENS.line_height_1,
    cell_title_line_margin_right: TOKENS.space_2,
    cell_value_text_color: TOKENS.gray_7,
    cell_required_color: TOKENS.red_6,
    cell_required_width: TOKENS.space_3,
    cell_icon_link_margin_left: TOKENS.space_2,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  const innerHeight = cv.cell_title_height

  return StyleSheet.create({
    cell: {
      backgroundColor: cv.cell_background_color,
    },

    cell_inner: {
      position: 'relative',
      marginHorizontal: cv.cell_group_title_padding_horizontal,
      paddingVertical: (cv.cell_mini_height - innerHeight) / 2,
    },

    cell_inner_row: {
      flexDirection: 'row',
    },

    title: {
      position: 'relative',
      flexDirection: 'row',
      marginRight: cv.cell_title_line_margin_right,
      // alignItems: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    title_required: {
      position: 'absolute',
      left: -cv.cell_required_width,
      height: innerHeight,
      width: cv.cell_required_width,
      // backgroundColor: '#789', // to test ui
      alignItems: 'center',
      justifyContent: 'center',
    },

    title_required_text: {
      fontSize: cv.cell_font_size,
      color: cv.cell_required_color,
    },

    title_text: {
      minHeight: innerHeight,
      // backgroundColor: '#f30', // to test ui
      color: cv.cell_title_text_color,
      fontSize: cv.cell_font_size,
      lineHeight: cv.cell_title_line_height,
      paddingVertical: (innerHeight - cv.cell_title_line_height) / 2,
    },

    value: {
      flex: 1,
    },

    value_text: {
      color: cv.cell_value_text_color,
      fontSize: cv.cell_font_size,
      lineHeight: cv.cell_title_line_height,
      paddingVertical: (innerHeight - cv.cell_title_line_height) / 2,
      // backgroundColor: '#f30', // to test ui
    },

    icon_link: {
      alignSelf: 'center',
      marginLeft: cv.cell_icon_link_margin_left,
      // backgroundColor: '#f30',
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
}
