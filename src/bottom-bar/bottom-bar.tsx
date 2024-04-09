import React, { useMemo, useEffect, memo, useRef } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { Keyboard, Platform, Animated } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { varCreator as varCreatorDivider } from '../divider/style'
import { getDefaultValue } from '../helpers'
import easing from '../helpers/easing'
import Theme from '../theme'

import type { BottomBarProps } from './interface'
import { varCreator } from './style'

const BottomBar: React.FC<BottomBarProps> = ({
  theme,
  safeAreaInsetBottom = true,
  backgroundColor,
  height,
  hidden = false,
  keyboardShowNotRender = true,
  divider = true,

  style,
  ...restProps
}) => {
  const { bottom } = useSafeAreaInsets()
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })
  const [CV_DIVIDER] = Theme.useStyle({
    varCreator: varCreatorDivider,
  })

  backgroundColor = getDefaultValue(
    backgroundColor,
    CV.bottom_bar_background_color,
  )
  height = getDefaultValue(height, CV.bottom_bar_height)!

  const realHeight = height + (safeAreaInsetBottom ? bottom : 0)
  const heightAnimated = useRef(new Animated.Value(realHeight))

  // 监听键盘
  useEffect(() => {
    // 安卓才隐藏底部
    if (keyboardShowNotRender && Platform.OS === 'android') {
      // 注意如果你把 android:windowSoftInputMode 设置为 adjustResize 或是 adjustPan，则在 Android 上只有 keyboardDidShow 和 keyboardDidHide 事件有效。
      const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
        Animated.timing(heightAnimated.current, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
          easing: easing.easeInQuint,
        }).start()
      })
      const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
        Animated.timing(heightAnimated.current, {
          toValue: realHeight,
          duration: 100,
          useNativeDriver: false,
          delay: 200,
        }).start()
      })

      return () => {
        keyboardDidShow.remove()
        keyboardDidHide.remove()
      }
    }
  }, [keyboardShowNotRender, realHeight])

  const viewStyles = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        height: heightAnimated.current as unknown as number,
        paddingBottom: safeAreaInsetBottom ? bottom : 0,
        backgroundColor,
        borderTopColor: CV_DIVIDER.divider_color_light,
        borderTopWidth: divider ? 1 : 0,
        overflow: 'hidden',
      },
      style,
    ],
    [
      bottom,
      backgroundColor,
      divider,
      CV_DIVIDER.divider_color_light,
      safeAreaInsetBottom,
      style,
    ],
  )

  // 本身隐藏
  if (hidden) {
    return null
  }

  return <Animated.View {...restProps} style={viewStyles} />
}

export default memo(BottomBar)
