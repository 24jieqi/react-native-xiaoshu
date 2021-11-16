import React, { isValidElement, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { IconArrowOutline } from '../icon'
import { getDefaultValue } from '../helpers'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style'
import type { NavBarProps } from './interface'

const BACK_ARROW_HIT_SLOP = {
  left: 10,
  right: 10,
  // top: 0,
  // bottom: 0,
}

/**
 * NavBar 导航栏
 */
const NavBar: React.FC<NavBarProps> = ({
  style,
  leftStyle,
  rightStyle,
  titleTextStyle,
  title,
  leftExtra,
  rightExtra,
  showBackArrow = true,
  backArrowColor,
  backArrowSize,
  border = true,
  onPressBackArrow,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  backArrowColor = getDefaultValue(backArrowColor, THEME_VAR.nav_bar_icon_color)
  backArrowSize = getDefaultValue(backArrowSize, THEME_VAR.nav_bar_arrow_size)

  const barStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.bar,
    border
      ? {
          borderBottomColor: THEME_VAR.border_color,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }
      : null,
    style,
  ])
  const leftStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.left,
    leftStyle,
  ])
  const rightStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.right,
    rightStyle,
  ])
  const titleTextStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.title_text,
    titleTextStyle,
  ])

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyleSummary}>{title}</Text>
    )
  ) : null

  return (
    <View style={barStyleSummary}>
      {showBackArrow || isDef(leftExtra) ? (
        <View style={leftStyleSummary}>
          {showBackArrow ? (
            <TouchableOpacity
              style={STYLES.back_arrow}
              onPress={onPressBackArrow}
              activeOpacity={THEME_VAR.active_opacity}
              hitSlop={BACK_ARROW_HIT_SLOP}>
              <IconArrowOutline
                size={backArrowSize}
                color={backArrowColor}
                direction="left"
              />
            </TouchableOpacity>
          ) : null}

          {leftExtra}
        </View>
      ) : null}

      {isDef(rightExtra) ? (
        <View style={rightStyleSummary}>{rightExtra}</View>
      ) : null}

      {titleJSX}
    </View>
  )
}

export default memo(NavBar)
