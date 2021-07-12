import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { CellProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  { size, border }: Pick<CellProps, 'size' | 'border'>,
) => {
  const isLarge = size === 'large'
  const borderWidth: number = border ? 1 : 0

  const titleFontSize = isLarge
    ? themeVar.cell_large_title_font_size
    : themeVar.cell_font_size

  return StyleSheet.create({
    cellTouchable: {
      backgroundColor: themeVar.cell_background_color,
    },

    cell: {
      flexDirection: 'row',
      borderStyle: 'solid',
      position: 'relative',
      marginHorizontal: themeVar.padding_sm,
      paddingVertical: 5,
      borderBottomColor: themeVar.cell_border_color,
      borderBottomWidth: borderWidth,
    },

    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    title: {
      marginRight: themeVar.padding_md,
      minHeight: themeVar.cell_line_height,
      // backgroundColor: '#f30', // to test ui
    },

    titleText: {
      color: themeVar.cell_title_color,
      fontSize: titleFontSize,
      paddingVertical: (themeVar.cell_line_height - 22) / 2,
      lineHeight: 22,
    },

    value: {
      minHeight: themeVar.cell_line_height,
      flex: 1,
    },

    valueText: {
      color: themeVar.cell_value_color,
      fontSize: themeVar.cell_font_size,
      paddingVertical: (themeVar.cell_line_height - 22) / 2,
      lineHeight: 22,
      textAlign: 'right',
      // backgroundColor: '#f30', // to test ui
    },

    iconLeft: {
      marginRight: themeVar.padding_base,
      color: themeVar.cell_icon_color,
      fontSize: themeVar.cell_icon_size,
      lineHeight: themeVar.cell_line_height,
    },

    arrow: {
      marginLeft: themeVar.padding_base,
      color: themeVar.cell_icon_color,
      fontSize: themeVar.cell_icon_size,
      lineHeight: themeVar.cell_line_height,
      height: themeVar.cell_line_height,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    required: {
      position: 'absolute',
      left: -themeVar.padding_sm,
      height: themeVar.cell_line_height,
      width: themeVar.padding_sm,
      // backgroundColor: '#789', // to test ui
      alignItems: 'center',
      justifyContent: 'center',
    },

    requiredText: {
      fontSize: themeVar.cell_font_size,
      color: themeVar.cell_required_color,
    },

    verticalWrapper: {
      flexDirection: 'column',
    },

    verticalHeader: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      // backgroundColor: '#ddd', // to test ui
    },

    verticalBody: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
}
