import React, { isValidElement, memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import type { LoadingProps } from './interface'
import { createStyles } from './style'
import Circular from './circular'
import Spinner from './spinner'

/**
 * Loading 加载
 * 加载图标，用于表示加载中的过渡状态。
 */
const Loading: React.FC<LoadingProps> = ({
  children,
  style,
  textStyle,
  size,
  color,
  textSize,
  vertical = false,
  type = 'circular',
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar, { size, color, textSize, vertical })

  const textJSX = children ? (
    isValidElement(children) ? (
      children
    ) : (
      <Text style={StyleSheet.flatten([Styles.text, textStyle])}>
        {children}
      </Text>
    )
  ) : null

  return (
    <View style={StyleSheet.flatten([Styles.loading, style])}>
      {type === 'circular' ? (
        <Circular size={size} color={color} />
      ) : (
        <Spinner size={size} color={color} />
      )}
      {textJSX}
    </View>
  )
}

export default memo<typeof Loading>(Loading)
