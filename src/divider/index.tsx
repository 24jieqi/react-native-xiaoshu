import React, { memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import type { DividerProps } from './interface'
import { createStyles } from './style'

/**
 * Divider 分割线
 * @description 用于将内容分隔为多个区域。
 */
const Divider: React.FC<DividerProps> = ({
  children,
  textStyle,
  borderStyle,
  style,
  dashed = false,
  hairline = true,
  contentPosition = 'center',
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar, { dashed, hairline, contentPosition })

  const styleSummary: ViewStyle = StyleSheet.flatten([Styles.divider, style])
  const textStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.text,
    textStyle,
  ])
  const leftBorderStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.border,
    Styles.borderLeft,
    borderStyle,
  ])
  const rightBorderStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.border,
    Styles.borderRight,
    borderStyle,
  ])

  if (children) {
    return (
      <View style={styleSummary}>
        <View style={leftBorderStyleSummary} />
        <Text style={textStyleSummary}>{children}</Text>
        <View style={rightBorderStyleSummary} />
      </View>
    )
  }

  return (
    <View style={styleSummary}>
      <View style={[Styles.border, borderStyle]} />
    </View>
  )
}

export default memo<typeof Divider>(Divider)
