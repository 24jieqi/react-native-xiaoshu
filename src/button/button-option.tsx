import Color from 'color'
import isNil from 'lodash/isNil'
import React, { isValidElement, memo, useMemo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import type { ButtonOptionProps } from './interface'
import { varCreator, styleCreator } from './style'

const ButtonOption: React.FC<ButtonOptionProps> = ({
  active,
  activeHighlight = true,
  badge,

  text,
  textStyle,
  size = 's',
  hairline,

  style,
  children,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const inactiveBackgroundColor = useMemo(
    () =>
      Color(CV.button_primary_color).lightness(CV.button_hazy_lightness).hex(),
    [CV.button_hazy_lightness, CV.button_primary_color],
  )
  const activeBackgroundColor = useMemo(
    () => Color(CV.button_primary_color).fade(0.89).string(),
    [CV.button_primary_color],
  )

  const buttonStyles: StyleProp<ViewStyle> = [
    STYLES.button,
    STYLES.option,
    {
      height: CV[`button_${size}_height`],
      backgroundColor:
        active && activeHighlight
          ? activeBackgroundColor
          : inactiveBackgroundColor,
      borderColor: active ? CV.button_primary_color : inactiveBackgroundColor,
      borderWidth: hairline ? StyleSheet.hairlineWidth : 1,
    },
    STYLES[`button_${size}_padding_horizontal`],
    style,
  ]

  const childrenJSX = isValidElement(children)
    ? children
    : renderTextLikeJSX(!isNil(children) ? children : text, [
        {
          color:
            active && activeHighlight ? CV.button_primary_color : TOKENS.gray_8,
        },
        textStyle,
      ])
  const badgeJSX = !isNil(badge) ? (
    <Text style={STYLES.option_badge_text}>{badge}</Text>
  ) : null

  return (
    <TouchableOpacity
      {...restProps}
      activeOpacity={CV.button_active_opacity}
      style={buttonStyles}>
      {childrenJSX}
      {badgeJSX}
    </TouchableOpacity>
  )
}

export default memo(ButtonOption)
