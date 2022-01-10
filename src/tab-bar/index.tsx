import React, { useState, memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { getDefaultValue, isValue } from '../helpers'
import BottomBar from '../bottom-bar'
import { useTheme, widthStyle } from '../theme'
import { useUpdateEffect } from '../hooks'

import type { TabBarProps, TabValue } from './interface'
import { createStyles } from './style'

const TabBar: React.FC<TabBarProps> = ({
  textColor,
  iconColor,
  activeTextColor,
  activeIconColor,
  value,
  defaultValue,
  options,
  onChange,

  ...restProps
}) => {
  const [localValue, setLocalValue] = useState<TabValue>(
    isValue(value) ? value : defaultValue,
  )
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  textColor = getDefaultValue(textColor, THEME_VAR.tab_bar_text_color)
  iconColor = getDefaultValue(iconColor, THEME_VAR.tab_bar_icon_color)
  activeTextColor = getDefaultValue(
    activeTextColor,
    THEME_VAR.tab_bar_active_text_color,
  )
  activeIconColor = getDefaultValue(
    activeIconColor,
    THEME_VAR.tab_bar_active_icon_color,
  )

  // 同步值
  useUpdateEffect(() => {
    setLocalValue(value)
  }, [value])

  const genOnPress = (value: TabValue) => () => {
    setLocalValue(value)
    onChange?.(value)
  }

  return (
    <BottomBar {...restProps} style={STYLES.tab_bar}>
      {options.map(item => {
        const isActive = item.value === localValue

        return (
          <TouchableOpacity
            key={item.value}
            style={STYLES.item}
            activeOpacity={THEME_VAR.active_opacity}
            onPress={isActive ? undefined : genOnPress(item.value)}>
            {item.iconRender(isActive ? activeIconColor : iconColor)}
            <Text
              style={[
                STYLES.item_text,
                {
                  color: isActive ? activeTextColor : textColor,
                },
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </BottomBar>
  )
}

export default memo(TabBar)
