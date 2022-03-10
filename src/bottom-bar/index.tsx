import React, { useMemo, memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { varCreator as varCreatorDivider } from '../divider/style'
import { getDefaultValue } from '../helpers'
import { useThemeTokens, createVar } from '../theme'

import type { BottomBarProps } from './interface'
import { varCreator } from './style'

const BottomBar: React.FC<BottomBarProps> = ({
  safeAreaInsetBottom = true,
  backgroundColor,

  style,
  ...restProps
}) => {
  const { bottom } = useSafeAreaInsets()
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_DIVIDER = createVar(TOKENS, varCreatorDivider)

  backgroundColor = getDefaultValue(
    backgroundColor,
    CV.bottom_bar_background_color,
  )

  const viewStyles = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        height: CV.bottom_bar_height + (safeAreaInsetBottom ? bottom : 0),
        paddingBottom: safeAreaInsetBottom ? bottom : 0,
        backgroundColor,
        borderTopColor: CV_DIVIDER.divider_color_light,
        borderTopWidth: 1,
      },
      style,
    ],
    [
      bottom,
      backgroundColor,
      CV.bottom_bar_height,
      CV_DIVIDER.divider_color_light,
      safeAreaInsetBottom,
      style,
    ],
  )

  return <View {...restProps} style={viewStyles} />
}

export default memo<typeof BottomBar>(BottomBar)
