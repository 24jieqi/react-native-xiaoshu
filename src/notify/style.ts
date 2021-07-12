import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { NotifyProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  {
    color,
    backgroundColor,
    type,
  }: Pick<NotifyProps, 'color' | 'backgroundColor' | 'type'>,
) => {
  const typeBackgroundColor =
    themeVar[
      `notify_${type}_background_color` as 'notify_primary_background_color'
    ] || themeVar.notify_primary_background_color

  return StyleSheet.create({
    notify: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: themeVar.notify_horizontal_padding,
      paddingVertical: themeVar.notify_vertical_padding,
      backgroundColor: backgroundColor || typeBackgroundColor,
    },

    text: {
      color: color || themeVar.notify_text_color,
      fontSize: themeVar.notify_font_size,
      lineHeight: themeVar.notify_line_height,
    },
  })
}
