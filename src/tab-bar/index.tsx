import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import BottomBar from '../bottom-bar'
import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue } from '../helpers'
import { useControllableValue } from '../hooks'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { TabBarProps, TabValue } from './interface'
import { varCreator, styleCreator } from './style'

const TabBar: React.FC<TabBarProps> = ({
  textColor,
  iconColor,
  activeTextColor,
  activeIconColor,
  options,

  ...restProps
}) => {
  const [value, onChange] = useControllableValue(restProps)
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const STYLES = createStyle(CV, styleCreator)

  textColor = getDefaultValue(textColor, CV.tab_bar_text_color)
  iconColor = getDefaultValue(iconColor, CV.tab_bar_icon_color)
  activeTextColor = getDefaultValue(
    activeTextColor,
    CV.tab_bar_active_text_color,
  )
  activeIconColor = getDefaultValue(
    activeIconColor,
    CV.tab_bar_active_icon_color,
  )

  const genOnPress = (v: TabValue) => () => {
    onChange(v)
  }

  return (
    <BottomBar {...restProps} style={STYLES.tab_bar}>
      {options.map(item => {
        const isActive = item.value === value

        return (
          <TouchableOpacity
            key={item.value}
            style={STYLES.item}
            activeOpacity={CV_BUTTON.button_active_opacity}
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
