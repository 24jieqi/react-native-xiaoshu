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
  size = 'normal',
  plain = false,
  hairline = false,
  disabled = false,
  loading = false,
  loadingText,
  square = false,
  round = false,
  icon,
  color,
  textColor,
  ...otherProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const showDisabled = disabled || loading

  const commonButtonStyle = StyleSheet.flatten<ViewStyle>([
    STYLES.button,
    STYLES[`button_${type}`],
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
    showDisabled ? STYLES.button_disabled : null,
  ])
  const commonTextStyle = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    STYLES[`text_${type}`],
    STYLES[`text_${size}`],
    color || textColor
      ? {
          color: textColor || '#fff',
        }
      : null,
  ])

  if (plain) {
    commonButtonStyle.backgroundColor = 'transparent'
    commonTextStyle.color = commonButtonStyle.borderColor
  }

  const buttonStyleSummary = StyleSheet.flatten([commonButtonStyle, style])
  const textStyleSummary = StyleSheet.flatten([commonTextStyle, textStyle])

  const contextJSX = loading ? (
    <Loading
      color={textStyleSummary.color as string}
      size={textStyleSummary.fontSize}>
      {loadingText}
    </Loading>
  ) : (
    <>
      {icon || null}
      <Text style={textStyleSummary}>{text || children}</Text>
    </>
  )

  return (
    <TouchableOpacity
      disabled={showDisabled}
      style={buttonStyleSummary}
      activeOpacity={THEME_VAR.button_active_opacity}
      {...otherProps}>
      {contextJSX}
    </TouchableOpacity>
  )
}

export default memo<typeof Button>(Button)
