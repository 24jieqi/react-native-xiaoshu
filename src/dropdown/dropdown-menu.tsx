import React, { useMemo, useRef, memo } from 'react'
import { View } from 'react-native'

import { varCreator as varCreatorDivider } from '../divider/style'
import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import { DropdownConfig } from './context'
import type { DropdownMenuProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * DropdownMenu 下拉菜单的横条
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  theme,
  titleStyle,
  titleTextStyle,
  iconStyle,
  activeColor,
  direction = 'down',
  duration,
  zIndex = 10,
  // overlay = true,
  // closeOnPressOverlay = true,
  closeOnPressOutside = true,

  divider = true,

  style,
  ...restProps
}) => {
  const MenuRef = useRef<View>(null)
  const [CV, STYLES, TOKENS] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_DIVIDER] = Theme.useStyle({
    varCreator: varCreatorDivider,
  })

  activeColor = getDefaultValue(activeColor, CV.dropdown_active_color)
  duration = getDefaultValue(duration, TOKENS.animation_duration_fast)

  const config = useMemo(
    () => ({
      titleStyle,
      titleTextStyle,
      iconStyle,
      activeColor,
      direction,
      duration,
      zIndex,
      closeOnPressOutside,
      MenuRef,
      theme,
    }),
    [
      activeColor,
      closeOnPressOutside,
      direction,
      duration,
      iconStyle,
      theme,
      titleStyle,
      titleTextStyle,
      zIndex,
    ],
  )
  const dividerStyle = {
    borderBottomColor: CV_DIVIDER.divider_color_light,
    borderBottomWidth: divider ? 1 : 0,
  }

  return (
    <DropdownConfig.Provider value={config}>
      <View
        {...restProps}
        collapsable={false}
        ref={MenuRef}
        style={[STYLES.menu, dividerStyle, style]}
      />
    </DropdownConfig.Provider>
  )
}

export default memo(DropdownMenu)
