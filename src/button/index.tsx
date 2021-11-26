import React, { memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import Loading from '../loading'
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
  type = 'default',
  size = 'default',
  plain = false,
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

  const commonButtonStyle = StyleSheet.flatten<ViewStyle>([
    STYLES.button,
    {
      backgroundColor:
        THEME_VAR[`button_${type}_background_color`] ||
        THEME_VAR.button_default_background_color,
      borderColor:
        THEME_VAR[`button_${type}_border_color`] ||
        THEME_VAR.button_default_border_color,
      height:
        THEME_VAR[`button_${size}_height`] ||
        THEME_VAR.button_default_font_size,
    },
    STYLES[`button_${size}`],
    hairline ? STYLES.button_border_width_hairline : null,
    square ? STYLES.button_square : null,
    round ? STYLES.button_round : null,
    color
      ? {
          backgroundColor: color,
          borderColor: color,
        }
      : null,
    disabled ? STYLES.button_disabled : null,
  ])
  const commonTextStyle = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    {
      color:
        THEME_VAR[`button_${type}_color`] || THEME_VAR.button_default_color,
      fontSize:
        THEME_VAR[`button_${type}_font_size`] ||
        THEME_VAR.button_default_font_size,
    },
    color || textColor
      ? {
          color: textColor || '#fff',
        }
      : null,
  ])

  if (plain) {
    commonButtonStyle.backgroundColor = 'transparent'
    commonTextStyle.color = commonButtonStyle.borderColor

    if (type === 'default') {
      commonButtonStyle.borderColor = '#BEC6D2'
      commonTextStyle.color = THEME_VAR.primary
    }
  }

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
      <Text style={textStyleSummary}>{text || children}</Text>
    </>
  )

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[commonButtonStyle, style]}
      activeOpacity={THEME_VAR.button_active_opacity}
      {...otherProps}>
      {contextJSX}
    </TouchableOpacity>
  )
}

export default memo<typeof Button>(Button)
