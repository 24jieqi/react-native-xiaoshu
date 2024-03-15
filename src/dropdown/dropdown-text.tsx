import isNil from 'lodash/isNil'
import omit from 'lodash/omit'
import React, { memo } from 'react'
import type { TextStyle, ViewStyle, StyleProp } from 'react-native'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue, getArrowOutline } from '../helpers'
import Theme from '../theme'

import { useDropdownConfig } from './context'
import DropdownBadge from './dropdown-badge'
import type { DropdownTextProps } from './interface'
import { varCreator, styleCreator } from './style'

const DropdownText: React.FC<DropdownTextProps> = ({
  textStyle,
  iconStyle,
  disabled = false,
  title,
  active = false,
  pressable = true,
  activeColor,
  direction,
  badge,

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
  const showBadge = !active && !isNil(badge) && badge !== false

  // 修正数据
  activeColor = getDefaultValue(activeColor, config.activeColor)
  activeOpacity = getDefaultValue(
    activeOpacity,
    CV_BUTTON.button_active_opacity,
  )
  direction = getDefaultValue(direction, config.direction)

  const textStyleFlatten = StyleSheet.flatten(textStyle) || {}
  const textColor = disabled
    ? CV.dropdown_text_disabled_color
    : active
      ? activeColor
      : textStyleFlatten.color || CV.dropdown_text_color

  const itemStyles: StyleProp<ViewStyle> = [
    STYLES.text_item,
    config.titleStyle,
    style,
  ]
  const textStyles: StyleProp<TextStyle> = [
    STYLES.text_text,
    showBadge ? null : STYLES.text_text_gap,
    config.titleTextStyle,
    {
      color: textColor,
    },
    omit(textStyleFlatten, ['color']),
  ]
  const iconStyles = [config.iconStyle, iconStyle].filter(Boolean)

  const ArrowFill = getArrowOutline(
    active ? (direction === 'up' ? 'down' : 'up') : direction,
  )
  const ctxJSX = (
    <>
      <View style={STYLES.text_text_container}>
        <Text style={textStyles} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {showBadge ? (
        <DropdownBadge
          count={badge}
          style={[STYLES.text_text_badge, STYLES.text_text_gap]}
        />
      ) : null}

      <ArrowFill
        style={iconStyles.length ? iconStyles : undefined}
        size={CV.dropdown_text_icon_size}
        color={active ? activeColor : CV.dropdown_text_icon_color}
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
