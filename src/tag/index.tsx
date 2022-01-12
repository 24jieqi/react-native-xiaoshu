import React, { memo, useMemo } from 'react'
import type { TextStyle, ViewStyle, StyleProp } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { CrossOutline } from '../icon'
import { useTheme, widthStyle } from '../theme'
import { hex2rgba, isDef } from '../helpers'
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
  outward = 'fill',
  round = false,
  size = 'medium',
  type = 'default',
  closeable = false,
  onPressClose,
  hairline = false,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const mainColor = isDef(color)
    ? color
    : THEME_VAR[`tag_${type}_color` as 'tag_default_color'] ||
      THEME_VAR.tag_default_color

  const padding_vertical_size = `padding_vertical_${size}`
  const padding_horizontal_size = `padding_horizontal_${size}`
  const { outwardInnerStyle, outwardTextStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = {}
    const tempTextStyle: TextStyle = {}

    switch (outward) {
      case 'fill':
        tempInnerStyle.backgroundColor = mainColor
        tempInnerStyle.borderColor = mainColor

        tempTextStyle.color = THEME_VAR.tag_text_color
        break
      case 'ghost':
        tempInnerStyle.backgroundColor = THEME_VAR.tag_ghost_bg_color
        tempInnerStyle.borderColor = mainColor

        tempTextStyle.color = mainColor
        break
      case 'flat':
        tempInnerStyle.backgroundColor = hex2rgba(mainColor, 0.1)
        tempInnerStyle.borderColor = hex2rgba(mainColor, 0.1)
        tempTextStyle.color = mainColor
        break
      default:
        break
    }
    return {
      outwardInnerStyle: tempInnerStyle,
      outwardTextStyle: tempTextStyle,
    }
  }, [
    outward,
    mainColor,
    THEME_VAR.tag_text_color,
    THEME_VAR.tag_ghost_bg_color,
  ])

  const innerStyles: StyleProp<ViewStyle> = [
    /** 基础样式 */
    STYLES.inner,
    /** 类型样式 */
    outwardInnerStyle,
    hairline ? STYLES.border_width_hairline : null,
    size === 'large' && STYLES.border_radius_large,
    STYLES[padding_vertical_size],
    STYLES[padding_horizontal_size],
    round && STYLES.border_radius_round,
    mark && STYLES.inner_mark,
    /** 外部样式 */
    innerStyle,
  ]

  const textStyleSummary = StyleSheet.flatten<TextStyle>([
    /** 基础样式 */
    STYLES.text,
    /** 类型样式 */
    outwardTextStyle,
    size === 'large' && STYLES.font_size_large,
    /** 外部样式 */
    isDef(textColor) && {
      color: textColor,
    },
    textStyle,
  ])

  return (
    <View style={[STYLES.tag, style]}>
      <View style={innerStyles}>
        <Text style={textStyleSummary}>{children}</Text>
        {closeable ? (
          <CrossOutline
            onPress={onPressClose}
            size={textStyleSummary.fontSize}
            color={textStyleSummary.color as string}
            style={{}}
          />
        ) : null}
      </View>
    </View>
  )
}

export default memo<typeof Tag>(Tag)
