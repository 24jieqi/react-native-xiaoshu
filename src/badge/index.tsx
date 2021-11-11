import React, { memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { isDef } from '../helpers/typeof'
import { useTheme, widthStyle } from '../theme'
import type { BadgeProps } from './interface'
import { createStyles } from './style'

/**
 * Badge 徽标
 * @description 在右上角展示徽标数字或小红点。
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  count,
  dot,
  max,
  color,
  style,
  countStyle,
  countTextStyle,
  loading = false,
  showZero = false,
  offset,
  status,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  if (max && typeof count === 'number' && count > max) {
    count = `${max}+`
  }

  const hasCount = isDef(count) && (count === 0 ? showZero : true)
  const badgeStyleSummary = StyleSheet.flatten<ViewStyle>([STYLES.badge, style])
  const countStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.count,
    {
      backgroundColor:
        color || THEME_VAR[status] || THEME_VAR.badge_background_color,
    },
    dot ? STYLES.count_dot : null,
    isDef(children)
      ? [
          STYLES.count_fixed,
          dot ? STYLES.count_dot_fixed : null,
          offset
            ? {
                transform: [
                  {
                    translateX: offset[0],
                  },
                  {
                    translateY: offset[1],
                  },
                ],
              }
            : null,
        ]
      : null,
    countStyle,
  ])
  const countTextStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.count_text,
    countTextStyle,
  ])

  const badgeJSX =
    !loading && (hasCount || dot) ? (
      <View style={countStyleSummary}>
        {dot ? null : <Text style={countTextStyleSummary}>{count}</Text>}
      </View>
    ) : null

  return (
    <View style={badgeStyleSummary} collapsable={false}>
      {badgeJSX}
      {children}
    </View>
  )
}

export default memo<typeof Badge>(Badge)
