import React, { useLayoutEffect, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@fruits-chain/react-native-xiaoshu'

import FocusAwareStatusBar from '../focus-aware-status-bar'
import type { PageProps } from './interface'

/** 没有头部阴影 */
export const noHeaderShadowStyle = Platform.select({
  android: {
    elevation: 0,
  },
  ios: {
    borderBottomWidth: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
})

/**
 * 页面盒子
 */
const Page: React.FC<PageProps> = memo(
  ({
    children,
    statusBarProps,
    barStyle = 'dark-content',
    headerShown = true,
    headerBackgroundColor,
    title,
    statusBarShown = true,
    headerTintColor = '#11151A',
  }) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const themeVar = useTheme()

    useLayoutEffect(() => {
      const options: {
        headerStyle: ViewStyle
        headerTintColor: string
        title: string
        headerShown: boolean
        [index: string]: any
      } = {
        headerStyle: {
          ...noHeaderShadowStyle,
          backgroundColor: headerBackgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: themeVar.border_color,
          borderStyle: 'solid',
        },
        headerTintColor,
        title,
        headerShown,
      }

      navigation.setOptions(options)
    }, [
      navigation,
      headerShown,
      headerBackgroundColor,
      title,
      headerTintColor,
      themeVar.border_color,
    ])

    return (
      <>
        <FocusAwareStatusBar barStyle={barStyle} {...statusBarProps} />
        {!headerShown && statusBarShown ? (
          <View
            style={{
              height: insets.top,
              backgroundColor: headerBackgroundColor,
            }}
          />
        ) : null}
        {children}
      </>
    )
  },
)

export default Page
