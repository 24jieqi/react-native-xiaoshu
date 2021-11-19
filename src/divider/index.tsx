import React, { memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import type { DividerProps } from './interface'
import { createStyles } from './style'

/**
 * Divider 分割线
 * @description 用于将内容分隔为多个区域。
 */
const Divider: React.FC<DividerProps> = ({
  children,
  style,
  textStyle,
  borderStyle,
  leftBorderStyle,
  rightBorderStyle,
  dashed = false,
  hairline = false,
  contentPosition = 'center',
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const borderCommonStyle: ViewStyle = {
    ...STYLES.border,
    borderStyle: dashed ? 'dashed' : 'solid',
    borderBottomWidth: hairline ? StyleSheet.hairlineWidth : 1,
  }
  const styles: StyleProp<ViewStyle> = [STYLES.divider, style]
  const leftBorderStyles: StyleProp<ViewStyle> = [
    borderCommonStyle,
    STYLES.border_left,
    contentPosition === 'left'
      ? { maxWidth: THEME_VAR.divider_content_left_width }
      : null,
    borderStyle,
    leftBorderStyle,
  ]
  const rightBorderStyles: StyleProp<ViewStyle> = [
    borderCommonStyle,
    STYLES.border_right,
    contentPosition === 'right'
      ? { maxWidth: THEME_VAR.divider_content_right_width }
      : null,
    borderStyle,
    rightBorderStyle,
  ]

  if (children) {
    return (
      <View style={styles}>
        <View style={leftBorderStyles} />
        <Text style={[STYLES.text, textStyle]}>{children}</Text>
        <View style={rightBorderStyles} />
      </View>
    )
  }

  return (
    <View style={styles}>
      <View style={[borderCommonStyle, borderStyle]} />
    </View>
  )
}

export default memo<typeof Divider>(Divider)
