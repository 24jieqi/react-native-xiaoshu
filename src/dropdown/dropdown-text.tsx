import React, { memo } from 'react'
import type { TextStyle, ViewStyle, StyleProp } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue } from '../helpers'
import { getArrowFill } from '../icon/helper/arrow'
import Theme from '../theme'

import { useDropdownConfig } from './context'
import type { DropdownTextProps } from './interface'
import { varCreator } from './style.menu'
import { styleCreator } from './style.text'

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
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton)

  // 修正数据
  activeColor = getDefaultValue(activeColor, config.activeColor)
  activeOpacity = getDefaultValue(
    activeOpacity,
    CV_BUTTON.button_active_opacity,
  )
  direction = getDefaultValue(direction, config.direction)

  const textColor = disabled
    ? CV.dropdown_menu_title_disabled_text_color
    : active
    ? activeColor
    : CV.dropdown_menu_title_text_color

  const itemStyles: StyleProp<ViewStyle> = [
    STYLES.item,
    config.titleStyle,
    style,
  ]
  const textStyles: StyleProp<TextStyle> = [
    STYLES.text,
    config.titleTextStyle,
    {
      color: textColor,
    },
    textStyle,
  ]
  const iconStyles = [config.iconStyle, iconStyle].filter(Boolean)

  const ArrowFill = getArrowFill(
    active ? (direction === 'up' ? 'down' : 'up') : direction,
  )
  const ctxJSX = (
    <>
      <Text style={textStyles}>{title}</Text>
      <ArrowFill
        style={iconStyles.length ? iconStyles : undefined}
        size={CV.dropdown_menu_title_icon_size}
        color={active ? activeColor : textColor}
      />
    </>
  )

  if (pressable) {
    return (
      <TouchableOpacity
        {...restProps}
        disabled={disabled}
        style={itemStyles}
        activeOpacity={activeOpacity}>
        {ctxJSX}
      </TouchableOpacity>
    )
  }

  return (
    <View {...restProps} style={itemStyles}>
      {ctxJSX}
    </View>
  )
}

export default memo(DropdownText)
