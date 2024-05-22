import { Theme } from '@fruits-chain/react-native-xiaoshu'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getDefaultValue } from '~/helper'
import useColorSchemeDark from '~/hooks/useColorSchemeDark'

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
const Page: React.FC<React.PropsWithChildren<PageProps>> = memo(
  ({
    children,
    statusBarProps,
    barStyle,
    headerShown = true,
    headerBackgroundColor,
    title = '',
    statusBarShown = true,
    headerTintColor,
  }) => {
    const isColorSchemeDark = useColorSchemeDark()
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const TOKENS = Theme.useThemeTokens()

    const _headerTintColor = getDefaultValue(
      headerTintColor,
      isColorSchemeDark ? 'rgb(229, 229, 231)' : '#11151A',
    )!
    const _barStyle = getDefaultValue(
      barStyle,
      isColorSchemeDark ? 'light-content' : 'dark-content',
    )

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
          borderBottomWidth: 0,
          // borderBottomColor: TOKENS.border_color,
          // borderStyle: 'solid',
        },
        headerTintColor: _headerTintColor,
        title,
        headerShown,
      }

      navigation.setOptions(options)
    }, [
      navigation,
      headerShown,
      headerBackgroundColor,
      title,
      TOKENS.border_color,
      _headerTintColor,
    ])

    return (
      <>
        <FocusAwareStatusBar barStyle={_barStyle} {...statusBarProps} />
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
