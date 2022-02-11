import React, { memo } from 'react'
import { View, TouchableOpacity } from 'react-native'

import Divider from '../divider'
import { getDefaultValue, renderTextLikeJSX, isDef } from '../helpers'
import { ArrowLeftOutline } from '../icon'
import { useTheme, widthStyle } from '../theme'

import type { NavBarProps } from './interface'
import { createStyles } from './style'

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
  divider = true,
  onPressBackArrow,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  backArrowColor = getDefaultValue(backArrowColor, THEME_VAR.nav_bar_icon_color)
  backArrowSize = getDefaultValue(backArrowSize, THEME_VAR.nav_bar_arrow_size)

  const titleJSX = renderTextLikeJSX(title, [STYLES.title_text, titleTextStyle])

  return (
    <>
      <View style={[STYLES.bar, style]}>
        {showBackArrow || isDef(leftExtra) ? (
          <View style={[STYLES.left, leftStyle]}>
            {showBackArrow ? (
              <TouchableOpacity
                style={STYLES.back_arrow}
                onPress={onPressBackArrow}
                activeOpacity={THEME_VAR.button_active_opacity}
                hitSlop={BACK_ARROW_HIT_SLOP}>
                <ArrowLeftOutline size={backArrowSize} color={backArrowColor} />
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
      {divider ? <Divider /> : null}
    </>
  )
}

export default memo(NavBar)
