import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { IconArrowOutline } from '../icon'
import { getDefaultValue, renderTextLikeJSX } from '../helpers'
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
  bordered = true,
  hairline = false,
  onPressBackArrow,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  backArrowColor = getDefaultValue(backArrowColor, THEME_VAR.nav_bar_icon_color)
  backArrowSize = getDefaultValue(backArrowSize, THEME_VAR.nav_bar_arrow_size)

  const titleJSX = renderTextLikeJSX(title, [STYLES.title_text, titleTextStyle])

  const borderBottomWidth = hairline ? StyleSheet.hairlineWidth : 1

  return (
    <View
      style={[
        STYLES.bar,
        bordered
          ? {
              borderBottomColor: THEME_VAR.border_color,
              borderBottomWidth,
            }
          : null,
        style,
      ]}>
      {showBackArrow || isDef(leftExtra) ? (
        <View style={[STYLES.left, leftStyle]}>
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
        <View style={[STYLES.right, rightStyle]}>{rightExtra}</View>
      ) : null}

      {titleJSX}
    </View>
  )
}

export default memo(NavBar)
