import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { TagProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  {
    type,
    textColor,
    size,
    round,
    plain,
    hairline,
    color,
  }: Pick<
    TagProps,
    'color' | 'textColor' | 'plain' | 'round' | 'size' | 'type' | 'hairline'
  >,
) => {
  const backgroundColor =
    color ||
    themeVar[`tag_${type}_color` as 'tag_default_color'] ||
    themeVar.tag_default_color
  const paddingHorizontal =
    themeVar[`tag_${size}_padding_horizontal` as 'tag_horizontal_padding'] ||
    themeVar.tag_padding_horizontal
  const paddingVertical =
    themeVar[`tag_${size}_padding_vertical` as 'tag_medium_padding_vertical'] ||
    0

  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },

    wrapper: {
      overflow: 'hidden',
      flexBasis: 'auto',
      backgroundColor: plain
        ? themeVar.tag_plain_background_color
        : backgroundColor,
      borderRadius: round
        ? themeVar.tag_round_border_radius
        : size === 'large'
        ? themeVar.tag_large_border_radius
        : themeVar.tag_border_radius,
      borderWidth: hairline ? StyleSheet.hairlineWidth : 1,
      borderStyle: 'solid',
      borderColor: backgroundColor,
      flexDirection: 'row',
      alignItems: 'center',
    },

    wrapperMark: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: themeVar.tag_round_border_radius,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: themeVar.tag_round_border_radius,
    },

    text: {
      paddingHorizontal: paddingHorizontal,
      paddingVertical: paddingVertical,
      color: plain ? backgroundColor : textColor || themeVar.tag_text_color,
      fontSize:
        size === 'large'
          ? themeVar.tag_large_font_size
          : themeVar.tag_font_size,
      // lineHeight: themeVar.tag_line_height,
    },
  })
}
