import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { CellGroupProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  { border }: Pick<CellGroupProps, 'border'>,
) => {
  const borderWidth = border ? StyleSheet.hairlineWidth : 0

  return StyleSheet.create({
    title: {
      paddingHorizontal: themeVar.cell_group_title_padding_horizontal,
      paddingTop: themeVar.cell_group_title_padding_top,
      paddingBottom: themeVar.cell_group_title_padding_bottom,
    },

    text: {
      color: themeVar.cell_group_title_color,
      fontSize: themeVar.cell_group_title_font_size,
      lineHeight: themeVar.cell_group_title_line_height,
    },

    wrapper: {
      borderStyle: 'solid',
      // borderColor: '#000', // to test ui
      borderColor: themeVar.cell_border_color,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
    },
  })
}
