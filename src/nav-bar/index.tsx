import React, { isValidElement, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useTheme } from '../theme'
import { IconArrowOutline } from '../icon'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style'
import type { NavBarProps } from './interface'

/**
 * NavBar 导航栏
 */
const NavBar: React.FC<NavBarProps> = ({
  style,
  leftArrowStyle,
  titleTextStyle,
  title,
  leftText,
  rightText,
  leftArrow = true,
  border = true,
  onPressLeftArrow,
  onPressLeftText,
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar)

  const wrapperStyleSummary = StyleSheet.flatten<ViewStyle>([
    Styles.wrapper,
    border
      ? {
          borderBottomColor: themeVar.border_color,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }
      : null,
    style,
  ])
  const leftWrapperStyleSummary: ViewStyle = Styles.leftWrapper
  const leftArrowStyleSummary = StyleSheet.flatten<TextStyle>([
    Styles.leftArrow,
    leftArrowStyle,
  ])
  const titleTextStyleSummary = StyleSheet.flatten<TextStyle>([
    Styles.titleText,
    titleTextStyle,
  ])
  const rightWrapperStyleSummary: ViewStyle = Styles.rightWrapper

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyleSummary}>{title}</Text>
    )
  ) : null

  /** 左侧文字 纯文字或自定义 JSX */
  const leftTextJSX = isDef(leftText) ? (
    isValidElement(leftText) ? (
      leftText
    ) : (
      <Text style={Styles.leftText} onPress={onPressLeftText}>
        {leftText}
      </Text>
    )
  ) : null

  /** 右侧文字 纯文字或自定义 JSX */
  const rightTextJSX = isDef(rightText) ? (
    isValidElement(rightText) ? (
      rightText
    ) : (
      <Text style={Styles.rightText}>{rightText}</Text>
    )
  ) : null

  return (
    <View style={wrapperStyleSummary}>
      <View style={leftWrapperStyleSummary}>
        {leftArrow ? (
          <TouchableOpacity
            style={leftArrowStyleSummary}
            onPress={onPressLeftArrow}>
            <IconArrowOutline
              size={themeVar.nav_bar_arrow_size}
              color={leftArrowStyleSummary.color as string}
              direction="left"
            />
          </TouchableOpacity>
        ) : null}

        {leftTextJSX}
      </View>

      <View style={rightWrapperStyleSummary}>{rightTextJSX}</View>

      {titleJSX}
    </View>
  )
}

export default memo(NavBar)
