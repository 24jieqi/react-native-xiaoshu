import React from 'react'
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { View, Text, Image, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import type { EmptyProps } from './interface'
import { createStyles } from './style'
import emptyImage from './imgs/default_empty.png'

const Empty: React.FC<EmptyProps> = ({
  text = '暂无数据',
  source,
  style,
  imageStyle,
  imageProps,
  textStyle,
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar)

  const emptyStyleSummary = StyleSheet.flatten<ViewStyle>([Styles.empty, style])
  const imageStyleSummary = StyleSheet.flatten<ImageStyle>([
    Styles.img,
    {
      // 修复图片偏移问题
      // TODO 应该给一个不会出现偏移的图片
      position: 'relative',
      left: 8,
    },
    imageStyle,
  ])
  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    Styles.text,
    textStyle,
  ])

  return (
    <View style={emptyStyleSummary}>
      <Image
        {...imageProps}
        source={source || emptyImage}
        style={imageStyleSummary}
      />
      <Text style={textStyleSummary}>{text}</Text>
    </View>
  )
}

export default Empty
