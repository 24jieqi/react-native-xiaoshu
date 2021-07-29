import React, { useMemo, useCallback, memo } from 'react'
import type { TextStyle, ViewStyle } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavBar, useTheme } from 'react-native-xiaoshu'

import FocusAwareStatusBar from '../focus-aware-status-bar'
import type { PageProps } from './interface'

/**
 * 页面盒子
 */
const Page: React.FC<PageProps> = memo(
  ({
    children,
    style,
    statusBarProps,
    barStyle = 'dark-content',
    showHeader = true,
    headerBackgroundColor,
    title,
    onPressBack,
    headerProps,
  }) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const themeVar = useTheme()

    const statusBarBackgroundColor = headerBackgroundColor || '#fff'
    const textColor = barStyle === 'dark-content' ? '#000' : '#fff'
    const navBarStyle = useMemo<ViewStyle>(
      () => ({
        backgroundColor: statusBarBackgroundColor,
      }),
      [statusBarBackgroundColor],
    )
    const pageStyles = useMemo<ViewStyle>(
      () =>
        StyleSheet.flatten([
          { flex: 1, backgroundColor: themeVar.background_color_1 },
          style,
        ]),
      [themeVar.background_color_1, style],
    )
    const consBarStyle = useMemo<ViewStyle>(
      () => ({
        height: insets.top,
        backgroundColor: statusBarBackgroundColor,
      }),
      [insets.top, statusBarBackgroundColor],
    )
    const textStyle = useMemo<TextStyle>(
      () => ({
        color: textColor,
      }),
      [textColor],
    )
    /**
     * 点击返回
     */
    const onPressLeftArrow = useCallback(() => {
      if (onPressBack) {
        onPressBack()
      } else {
        navigation.goBack()
      }
    }, [navigation, onPressBack])

    return (
      <>
        <FocusAwareStatusBar barStyle={barStyle} {...statusBarProps} />

        {statusBarBackgroundColor !== 'transparent' ? (
          <View style={consBarStyle} />
        ) : null}

        <View style={pageStyles}>
          {showHeader ? (
            <NavBar
              style={navBarStyle}
              leftArrowStyle={textStyle}
              titleTextStyle={textStyle}
              title={title}
              onPressLeftArrow={onPressLeftArrow}
              {...headerProps}
            />
          ) : null}
          {children}
        </View>
      </>
    )
  },
)

export default Page
