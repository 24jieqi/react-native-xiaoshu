import React, { memo } from 'react'
import type { TextStyle, ViewStyle, StyleProp } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { IconCrossOutline } from '../icon'
// import {} from
import { isDef } from '../helpers/typeof'
import type { TagProps } from './interface'
import { createStyles } from './style'

/**
 * Tag 标签
 */
const Tag: React.FC<TagProps> = ({
  children,
  style,
  innerStyle,
  textStyle,
  color,
  textColor,
  mark = false,
  plain = false,
  round = false,
  size,
  type = 'default',
  closeable = false,
  onPressClose,
  hairline = false,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const backgroundColor = isDef(color)
    ? color
    : THEME_VAR[`tag_${type}_color` as 'tag_default_color'] ||
      THEME_VAR.tag_default_color
  textColor = isDef(textColor) ? textColor : THEME_VAR.tag_text_color

  const padding_vertical_size = `padding_vertical_${size}`
  const padding_horizontal_size = `padding_horizontal_${size}`

  const innerStyleSummary: StyleProp<ViewStyle> = [
    STYLES.inner,
    {
      backgroundColor: plain
        ? THEME_VAR.tag_plain_background_color
        : backgroundColor,
      borderColor: backgroundColor,
    },
    hairline ? STYLES.border_width_hairline : null,
    size === 'large' ? STYLES.border_radius_large : null,
    round ? STYLES.border_radius_round : null,
    mark ? STYLES.inner_mark : null,
    innerStyle,
  ]
  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.text,
    STYLES[padding_vertical_size] ? STYLES[padding_vertical_size] : null,
    STYLES[padding_horizontal_size] ? STYLES[padding_horizontal_size] : null,
    size === 'large' ? STYLES.font_size_large : null,
    {
      // 默认颜色才使用背景色，自定义颜色不反转
      color:
        plain && textColor === THEME_VAR.tag_text_color
          ? backgroundColor
          : textColor,
    },
    textStyle,
  ])

  return (
    <View style={[STYLES.tag, style]}>
      <View style={innerStyleSummary}>
        <Text style={textStyleSummary}>{children}</Text>
        {closeable ? (
          <IconCrossOutline
            onPress={onPressClose}
            size={textStyleSummary.fontSize}
            color={textStyleSummary.color as string}
          />
        ) : null}
      </View>
    </View>
  )
}

export default memo<typeof Tag>(Tag)
