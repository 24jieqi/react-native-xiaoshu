import Color from 'color'
import isNil from 'lodash/isNil'
import React, { isValidElement, memo, useMemo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import type { ButtonOptionProps } from './interface'
import { varCreator, styleCreator } from './style'

const ButtonOption: React.FC<ButtonOptionProps> = ({
  active,
  activeHighlight = true,
  badge,
  type = 'hazy',

  text,
  textStyle,
  size = 's',
  hairline,
  round = false,

  style,
  children,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const inactiveBackgroundColor = useMemo(() => {
    if (type === 'outline') {
      return TOKENS.white
    }

    if (type === 'white') {
      return TOKENS.white
    }

    return TOKENS.gray_2
  }, [TOKENS.gray_2, TOKENS.white, type])
  const inactiveBorderColor = useMemo(() => {
    if (restProps.disabled) {
      if (type === 'white') {
        return TOKENS.white
      }
      return CV.button_option_disabled_border_color
    }

    if (type === 'outline') {
      return TOKENS.gray_5
    }

    if (type === 'white') {
      return TOKENS.white
    }

    return inactiveBackgroundColor
  }, [
    CV.button_option_disabled_border_color,
    TOKENS.gray_5,
    TOKENS.white,
    inactiveBackgroundColor,
    restProps.disabled,
    type,
  ])
  const activeBackgroundColor = useMemo(
    () => Color(CV.button_primary_color).fade(0.89).string(),
    [CV.button_primary_color],
  )

  const buttonStyles: StyleProp<ViewStyle> = [
    STYLES.button,
    STYLES.option,
    {
      height: CV[`button_${size}_height`],
      backgroundColor: active ? activeBackgroundColor : inactiveBackgroundColor,
      borderColor: active ? CV.button_primary_color : inactiveBorderColor,
      borderWidth: hairline ? StyleSheet.hairlineWidth : 1,
    },
    STYLES[`button_${size}_padding_horizontal`],
    round ? STYLES.button_round : null,
    restProps.disabled ? STYLES.button_disabled : null,
    style,
  ]

  const childrenJSX = isValidElement(children)
    ? children
    : renderTextLikeJSX(!isNil(children) ? children : text, [
        {
          color: restProps.disabled
            ? CV.button_option_disabled_text_color
            : active && activeHighlight
              ? CV.button_primary_color
              : TOKENS.gray_8,
          fontSize: CV[`button_${size}_font_size`],
        },
        textStyle,
      ])
  const badgeTextJSX = renderTextLikeJSX(badge, [STYLES.option_badge_text])
  const badgeJSX = !isNil(badgeTextJSX) ? (
    <View style={STYLES.option_badge}>{badgeTextJSX}</View>
  ) : null

  return (
    <TouchableOpacity
      accessibilityRole="button"
      {...restProps}
      activeOpacity={CV.button_active_opacity}
      style={buttonStyles}>
      {childrenJSX}
      {badgeJSX}
    </TouchableOpacity>
  )
}

export default memo(ButtonOption)
