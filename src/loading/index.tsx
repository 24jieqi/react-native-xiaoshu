import React, { isValidElement, memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import { getDefaultValue, isDef } from '../helpers'
import type { LoadingProps } from './interface'
import Circular from './circular'
import Spinner from './spinner'

/**
 * Loading 加载
 * 加载图标，用于表示加载中的过渡状态。
 */
const Loading: React.FC<LoadingProps> = ({
  children,
  style,
  textStyle,
  size,
  color,
  textSize,
  vertical = false,
  type = 'circular',
}) => {
  const THEME_VAR = useTheme()
  const ICON_COLOR = getDefaultValue(color, THEME_VAR.loading_spinner_color)
  const ICON_SIZE = getDefaultValue(size, THEME_VAR.loading_spinner_size)

  const textJSX = isDef(children) ? (
    isValidElement(children) ? (
      children
    ) : (
      <Text
        style={StyleSheet.flatten([
          {
            fontSize: textSize || THEME_VAR.loading_text_font_size,
            color: color || THEME_VAR.loading_text_color,
            marginLeft: vertical ? 0 : THEME_VAR.padding_xs,
            marginTop: vertical ? THEME_VAR.padding_xs : 0,
          },
          textStyle,
        ])}>
        {children}
      </Text>
    )
  ) : null

  return (
    <View
      style={StyleSheet.flatten([
        STYLES.loading,
        vertical ? STYLES.loading_vertical : null,
        style,
      ])}>
      {type === 'circular' ? (
        <Circular size={ICON_SIZE} color={ICON_COLOR} />
      ) : (
        <Spinner size={ICON_SIZE} color={ICON_COLOR} />
      )}
      {textJSX}
    </View>
  )
}

const STYLES = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loading_vertical: {
    flexDirection: 'column',
  },
})

export default memo<typeof Loading>(Loading)
