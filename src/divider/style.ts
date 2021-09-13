import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { DividerProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  {
    dashed,
    hairline,
    contentPosition,
  }: Pick<DividerProps, 'contentPosition' | 'dashed' | 'hairline'>,
) => {
  return StyleSheet.create({
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: themeVar.divider_margin_vertical,
    },

    border: {
      height: 0,
      borderStyle: dashed ? 'dashed' : 'solid',
      borderBottomWidth: hairline ? StyleSheet.hairlineWidth : 1,
      // borderColor: '#000', // to test ui
      borderColor: themeVar.divider_border_color,
      flex: 1,
    },

    borderLeft: {
      marginRight: themeVar.divider_margin_horizontal,
      maxWidth:
        contentPosition === 'left'
          ? themeVar.divider_content_left_width
          : 'auto',
    },

    borderRight: {
      marginLeft: themeVar.divider_margin_horizontal,
      maxWidth:
        contentPosition === 'right'
          ? themeVar.divider_content_right_width
          : 'auto',
    },

    text: {
      color: themeVar.divider_text_color,
      fontSize: themeVar.divider_font_size,
      lineHeight: themeVar.divider_line_height,
    },
  })
}
