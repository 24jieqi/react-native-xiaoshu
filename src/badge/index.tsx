import React, { useState, useCallback, memo } from 'react'
import type { LayoutChangeEvent, ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import type { BadgeProps } from './interface'
import { createStyles } from './style'

type State = {
  width: number
  height: number
}

/**
 * Badge 徽标
 * @description 在右上角展示徽标数字或小红点。
 * @description RN translateX translateY 无法用百分数，需要通过 onLayout 拿到具体的数字后计算偏移量
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  content,
  dot,
  max,
  color,
  style,
  textStyle,
  wrapperStyle,
}) => {
  const [state, setState] = useState<State>({ width: 0, height: 0 })

  const themeVar = useTheme()
  const Styles = createStyles(themeVar, { color })

  /** 监听布局 */
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setState(e.nativeEvent.layout)
  }, [])

  if (max && typeof content === 'number' && content > +max) {
    content = `${max}+`
  }

  const hasContent = () => !!content || content === 0
  const badgeStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.badge,
    dot ? Styles.dot : null,
    style,
  ])
  const badgeTextStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.badgeText,
    textStyle,
  ])
  const badgeWrapperStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.wrapper,
    wrapperStyle,
  ])
  const badgeTextStyleBoxSummary: ViewStyle = StyleSheet.flatten([
    Styles.fixed,
    {
      transform: [
        {
          translateX: state.width / 2,
        },
        {
          translateY: -state.height / 2,
        },
      ],
    },
  ])

  const badgeJSX =
    hasContent() || dot ? (
      <View style={badgeStyleSummary}>
        <Text style={badgeTextStyleSummary}>{dot ? null : content}</Text>
      </View>
    ) : null

  if (children) {
    return (
      <View style={badgeWrapperStyleSummary}>
        <View style={badgeTextStyleBoxSummary} onLayout={onLayout}>
          {badgeJSX}
        </View>

        {children}
      </View>
    )
  }

  return badgeJSX
}

export default memo<typeof Badge>(Badge)
