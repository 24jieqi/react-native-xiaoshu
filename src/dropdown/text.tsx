import React, { memo } from 'react'
import type { TextStyle, ViewStyle } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import IconArrowFill from '../icon/arrow.fill'
import { getDefaultValue } from '../helpers'
import type { DropdownTextProps } from './interface'
import { useDropdownConfig } from './context'
import { createStyles } from './style.text'

const ICON_SIZE = 10

const DropdownText: React.FC<DropdownTextProps> = ({
  textStyle,
  iconStyle,
  disabled = false,
  title,
  active = false,
  pressable = true,
  activeColor,
  direction,

  // TouchableOpacity 属性
  style,
  activeOpacity,
  ...restProps
}) => {
  const config = useDropdownConfig()
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  // 修正数据
  activeColor = getDefaultValue(activeColor, config.activeColor)
  activeOpacity = getDefaultValue(activeOpacity, THEME_VAR.active_opacity)
  direction = getDefaultValue(direction, config.direction)

  const textColor = disabled
    ? THEME_VAR.dropdown_menu_title_disabled_text_color
    : active
    ? activeColor
    : THEME_VAR.dropdown_menu_title_text_color

  const itemStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.item,
    config.titleStyle,
    style,
  ])
  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    config.titleTextStyle,
    {
      color: textColor,
    },
    textStyle,
  ])
  const iconStyles = [config.iconStyle, iconStyle].filter(Boolean)

  const ctxJSX = (
    <>
      <Text style={textStyleSummary}>{title}</Text>
      <IconArrowFill
        style={iconStyles.length ? StyleSheet.flatten(iconStyles) : undefined}
        size={ICON_SIZE}
        direction={active ? (direction === 'up' ? 'down' : 'up') : direction}
        color={active ? activeColor : textColor}
      />
    </>
  )

  if (pressable) {
    return (
      <TouchableOpacity
        {...restProps}
        disabled={disabled}
        style={itemStyleSummary}
        activeOpacity={activeOpacity}>
        {ctxJSX}
      </TouchableOpacity>
    )
  }

  return (
    <View {...restProps} style={itemStyleSummary}>
      {ctxJSX}
    </View>
  )
}

export default memo(DropdownText)
