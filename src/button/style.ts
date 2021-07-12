import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { ButtonProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  {
    size,
    type,
    color,
    plain,
    disabled,
    square,
    round,
    hairline,
    loading,
  }: Pick<
    ButtonProps,
    | 'size'
    | 'type'
    | 'color'
    | 'plain'
    | 'hairline'
    | 'square'
    | 'round'
    | 'disabled'
    | 'loading'
  >,
) => {
  const fontSize =
    themeVar[`button_${size}_font_size` as 'button_mini_font_size'] ||
    themeVar.button_default_font_size
  const height =
    themeVar[`button_${size}_height` as 'button_mini_height'] ||
    themeVar.button_default_height

  let colorText =
    themeVar[`button_${type}_color` as 'button_default_color'] ||
    themeVar.button_default_color
  let backgroundColor =
    themeVar[
      `button_${type}_background_color` as 'button_default_background_color'
    ] || themeVar.button_default_background_color
  let borderColor =
    themeVar[`button_${type}_border_color` as 'button_default_border_color'] ||
    themeVar.button_default_border_color
  let borderWidth =
    (type === 'default' && !color) || plain ? themeVar.button_border_width : 0

  if (plain) {
    colorText = backgroundColor
    backgroundColor = themeVar.button_plain_background_color
  }

  // 自定义颜色
  if (color) {
    backgroundColor = color
    borderColor = color

    colorText = themeVar.white

    if (plain) {
      colorText = color
      backgroundColor = themeVar.button_plain_background_color
    }
  }

  if (hairline) {
    borderWidth = StyleSheet.hairlineWidth
  }

  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height,
      backgroundColor,
      borderColor,
      borderWidth,
      borderStyle: 'solid',
      opacity: disabled || loading ? themeVar.button_disabled_opacity : 1,
      borderRadius: square
        ? 0
        : round
        ? height / 2
        : themeVar.button_border_radius,
      paddingHorizontal: themeVar.padding_md,
    },
    text: {
      textAlign: 'center',
      fontSize,
      color: colorText,
    },
  })
}
