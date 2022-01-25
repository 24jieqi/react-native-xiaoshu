import React, { memo, useMemo } from 'react'
import type { ViewStyle, TextStyle, StyleProp } from 'react-native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import Loading from '../loading'
import { getDefaultValue, hex2rgba, isDef } from '../helpers'
import { createStyles } from './style'
import type { ButtonProps } from './interface'

/**
 * Button 按钮
 * @description 按钮用于触发一个操作，如提交表单。
 */
const Button: React.FC<ButtonProps> = ({
  children,
  style,
  text,
  textStyle,
  type = 'primary',
  danger = false,
  size = 'm',
  hairline = false,
  disabled = false,
  loading = false,
  loadingText,
  square = false,
  round = false,
  renderLeftIcon,
  color,
  textColor,
  ...otherProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  color = getDefaultValue(
    color,
    danger ? THEME_VAR.button_danger_color : THEME_VAR.button_primary_color,
  )
  textColor = getDefaultValue(textColor, THEME_VAR.white)

  const [_backgroundColor, _borderColor, _textColor, _borderWidth] =
    useMemo(() => {
      switch (type) {
        case 'hazy': {
          const hazyColor = hex2rgba(color, THEME_VAR.button_hazy)
          return [hazyColor, hazyColor, color, 0]
        }

        case 'outline': {
          return [
            THEME_VAR.button_ghost_background_color,
            THEME_VAR.button_border_color,
            color,
            1,
          ]
        }

        case 'ghost': {
          return [THEME_VAR.button_ghost_background_color, color, color, 1]
        }

        case 'link':
          return [
            THEME_VAR.button_ghost_background_color,
            THEME_VAR.button_ghost_background_color,
            color,
            0,
          ]

        case 'primary':
        default:
          return [color, color, textColor, 0]
      }
    }, [
      THEME_VAR.button_border_color,
      THEME_VAR.button_ghost_background_color,
      THEME_VAR.button_hazy,
      color,
      textColor,
      type,
    ])

  const buttonStyles: StyleProp<ViewStyle> = [
    STYLES.button,
    {
      height: THEME_VAR[`button_${size}_height`],
      backgroundColor: _backgroundColor,
      borderColor: _borderColor,
      borderWidth: _borderWidth
        ? hairline
          ? StyleSheet.hairlineWidth
          : _borderWidth
        : _borderWidth,
    },
    STYLES[`button_${size}_padding_horizontal`],
    square ? STYLES.button_square : null,
    round ? STYLES.button_round : null,
    disabled ? STYLES.button_disabled : null,
    loading ? STYLES.button_loading : null,
    style,
  ]
  const commonTextStyle = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    {
      fontSize: THEME_VAR[`button_${size}_font_size`],
      color: _textColor,
    },
  ])

  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    commonTextStyle,
    textStyle,
  ])
  const iconSize = THEME_VAR[`button_${size}_loading_size`] || 24
  const iconColor = textStyleSummary.color as string

  const contextJSX = loading ? (
    <Loading
      type="spinner"
      color={iconColor}
      size={iconSize}
      textSize={textStyleSummary.fontSize}>
      {loadingText}
    </Loading>
  ) : (
    <>
      {renderLeftIcon ? renderLeftIcon(iconColor, iconSize) : null}
      <Text style={textStyleSummary} numberOfLines={1}>
        {isDef(text) ? text : children}
      </Text>
    </>
  )

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={buttonStyles}
      activeOpacity={THEME_VAR.button_active_opacity}
      {...otherProps}>
      {contextJSX}
    </TouchableOpacity>
  )
}

export default memo<typeof Button>(Button)
