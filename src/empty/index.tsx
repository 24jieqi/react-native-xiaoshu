import React from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers/typeof'
import type { EmptyProps } from './interface'
import { createStyles } from './style'
import IconEmpty from './icon'

const Empty: React.FC<EmptyProps> = ({
  text = '暂无数据',
  style,
  textStyle,
  iconStyle,
  icon,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const emptyStyleSummary = StyleSheet.flatten<ViewStyle>([STYLES.empty, style])
  const iconStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.icon,
    iconStyle,
  ])
  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    textStyle,
  ])

  const iconJSX = isDef(icon) ? icon : <IconEmpty style={iconStyleSummary} />

  return (
    <View style={emptyStyleSummary}>
      {iconJSX}
      <Text style={textStyleSummary}>{text}</Text>
    </View>
  )
}

export default Empty
