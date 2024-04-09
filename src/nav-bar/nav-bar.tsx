import { ArrowLeftOutline } from '@fruits-chain/icons-react-native'
import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import Divider from '../divider'
import { getDefaultValue, renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import type { NavBarProps } from './interface'
import { varCreator, styleCreator } from './style'

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
  testID,
  style,
  theme,
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
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_BUTTON] = Theme.useStyle({
    varCreator: varCreatorButton,
  })

  backArrowColor = getDefaultValue(backArrowColor, CV.nav_bar_icon_color)
  backArrowSize = getDefaultValue(backArrowSize, CV.nav_bar_arrow_size)

  const titleJSX = renderTextLikeJSX(title, [STYLES.title_text, titleTextStyle])

  return (
    <>
      <View style={[STYLES.bar, style]} testID={testID}>
        {showBackArrow || !isNil(leftExtra) ? (
          <View style={[STYLES.left, leftStyle]}>
            {showBackArrow ? (
              <TouchableOpacity
                style={STYLES.back_arrow}
                onPress={onPressBackArrow}
                activeOpacity={CV_BUTTON.button_active_opacity}
                hitSlop={BACK_ARROW_HIT_SLOP}>
                <ArrowLeftOutline size={backArrowSize} color={backArrowColor} />
              </TouchableOpacity>
            ) : null}

            {leftExtra}
          </View>
        ) : null}

        {!isNil(rightExtra) ? (
          <View style={[STYLES.right, rightStyle]}>{rightExtra}</View>
        ) : null}

        {titleJSX}
      </View>
      {divider ? <Divider /> : null}
    </>
  )
}

export default memo(NavBar)
