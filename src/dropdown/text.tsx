import React, { memo } from 'react'
import type { TextStyle } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme } from '../theme'
import IconArrowFill from '../icon/arrow.fill'
import { isDef } from '../helpers/typeof'
import type { DropdownTextProps } from './interface'
import { useDropdownConfig } from './context'
import { createStyles } from './style.text'

const ICON_SIZE = 10

const DropdownText: React.FC<DropdownTextProps> = ({
  title,
  titleTextStyle,
  activeColor,
  active = false,
  disabled = false,
  direction = 'down',
  pressable = true,

  // TouchableOpacity 属性
  style,
  activeOpacity,
  ...restProps
}) => {
  const config = useDropdownConfig()
  const themeVar = useTheme()

  const Styles = createStyles(themeVar)

  // 修正数据
  if (!activeColor) {
    activeColor = config.activeColor
  }
  if (!isDef(activeOpacity)) {
    activeOpacity = themeVar.active_opacity
  }
  const textColor = disabled
    ? themeVar.dropdown_menu_title_disabled_text_color
    : active
    ? activeColor
    : themeVar.dropdown_menu_title_text_color

  const itemStyleSummary = StyleSheet.flatten([Styles.item, style])
  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    Styles.text,
    {
      color: textColor,
    },
    titleTextStyle,
  ])

  const ctxJSX = (
    <>
      <Text style={textStyleSummary}>{title}</Text>
      <IconArrowFill
        size={ICON_SIZE}
        direction={active ? (direction === 'up' ? 'down' : 'up') : direction}
        color={active ? activeColor : textColor}
      />
    </>
  )

  if (pressable) {
    return (
      <TouchableOpacity {...restProps} style={itemStyleSummary}>
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
