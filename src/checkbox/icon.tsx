import React, { memo, isValidElement } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View, TouchableOpacity } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { IconSuccessOutLine } from '../icon'
import { getDefaultValue } from '../helpers'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style.icon'
import type { CheckboxIconProps } from './interface'

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  active,
  activeColor,
  size,
  shape = 'round',
  disabled,
  pure = false,
  icon,

  style,
  activeOpacity,
  ...restProps
}) => {
  const THEME_VAR = useTheme()

  // 从配置中拿默认值
  size = getDefaultValue(size, THEME_VAR.checkbox_icon_size)
  activeColor = getDefaultValue(
    activeColor,
    THEME_VAR.checkbox_checked_icon_color,
  )
  activeOpacity = getDefaultValue(activeOpacity, THEME_VAR.active_opacity)

  const STYLES = widthStyle(THEME_VAR, createStyles)

  const iconStyles: StyleProp<ViewStyle> = [
    STYLES.icon,
    {
      width: size,
      height: size,
      borderRadius: shape === 'round' ? size / 2 : THEME_VAR.border_radius_sm,
    },
    active
      ? {
          backgroundColor: activeColor,
          borderColor: activeColor,
        }
      : null,
    disabled ? STYLES.icon_disabled : null,
    style,
  ]

  const iconJSX = active ? (
    isDef(icon) && isValidElement(icon) ? (
      icon
    ) : (
      <IconSuccessOutLine
        size={size}
        color={disabled ? THEME_VAR.checkbox_icon_border_color : '#fff'}
      />
    )
  ) : null

  if (pure) {
    return <View style={iconStyles}>{iconJSX}</View>
  }

  return (
    <TouchableOpacity
      {...restProps}
      style={iconStyles}
      disabled={disabled}
      activeOpacity={activeOpacity}>
      {iconJSX}
    </TouchableOpacity>
  )
}

export default memo(CheckboxIcon)
