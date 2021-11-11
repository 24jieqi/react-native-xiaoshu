import React, { isValidElement, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { isDef } from '../helpers/typeof'
import { useTheme, widthStyle } from '../theme'
import type { CellGroupProps } from './interface'
import { createStyles } from './style.group'

/**
 * CellGroup 单元格组
 * @description 一组单元格，可以设置一个标题。
 */
const CellGroup: React.FC<CellGroupProps> = ({
  children,
  title,
  style,
  textStyle,
  border = true,
  onPressTitleText,
  extra,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const titleStyleSummary: ViewStyle = StyleSheet.flatten([STYLES.title, style])
  const titleTextStyleSummary: TextStyle = StyleSheet.flatten([
    STYLES.text,
    textStyle,
  ])

  /** 标题 可能是自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyleSummary} onPress={onPressTitleText}>
        {title}
      </Text>
    )
  ) : null

  return (
    <>
      {titleJSX || isDef(extra) ? (
        <View style={titleStyleSummary}>
          {titleJSX}
          {extra}
        </View>
      ) : null}
      {border ? <View style={STYLES.body}>{children}</View> : children}
    </>
  )
}

export default memo<typeof CellGroup>(CellGroup)
