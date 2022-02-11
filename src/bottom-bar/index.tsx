import React, { useMemo, memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getDefaultValue } from '../helpers'
import { useTheme } from '../theme'

import type { BottomBarProps } from './interface'

const BottomBar: React.FC<BottomBarProps> = ({
  safeAreaInsetBottom = true,
  backgroundColor,

  style,
  ...restProps
}) => {
  const { bottom } = useSafeAreaInsets()
  const THEME_VAR = useTheme()

  backgroundColor = getDefaultValue(
    backgroundColor,
    THEME_VAR.bottom_bar_background_color,
  )

  const viewStyles = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        height:
          THEME_VAR.bottom_bar_height + (safeAreaInsetBottom ? bottom : 0),
        paddingBottom: safeAreaInsetBottom ? bottom : 0,
        backgroundColor,
        borderTopColor: THEME_VAR.divider_color_light,
        borderTopWidth: 1,
      },
      style,
    ],
    [
      style,
      safeAreaInsetBottom,
      bottom,
      backgroundColor,
      THEME_VAR.bottom_bar_height,
      THEME_VAR.divider_color_light,
    ],
  )

  return <View {...restProps} style={viewStyles} />
}

export default memo<typeof BottomBar>(BottomBar)
