import React, { memo } from 'react'
import type { TextStyle, ViewStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import { IconCrossOutline } from '../icon'
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
  const themeVar = useTheme()
  const Styles = createStyles(themeVar, {
    color,
    textColor,
    plain,
    round,
    size,
    type,
    hairline,
  })

  const tagStyleSummary: ViewStyle = StyleSheet.flatten([Styles.tag, style])
  const innerStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.wrapper,
    mark ? Styles.wrapperMark : null,
    innerStyle,
  ])
  const textStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.text,
    textStyle,
  ])

  return (
    <View style={tagStyleSummary}>
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
