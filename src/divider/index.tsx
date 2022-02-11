import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { getDefaultValue, isDef } from '../helpers'
import { useTheme, widthStyle } from '../theme'

import type { DividerProps } from './interface'
import DividerLine from './line'
import { createStyles } from './style'

/**
 * Divider 分割线
 * @description 用于将内容分隔为多个区域。
 */
const Divider: React.FC<DividerProps> = ({
  children,
  style,
  textStyle,
  type = 'light',
  dashed = false,
  color,
  contentPosition = 'center',
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  color = getDefaultValue(
    color,
    type === 'dark'
      ? THEME_VAR.divider_color_dark
      : THEME_VAR.divider_color_light,
  )

  return (
    <View style={[STYLES.divider, style]}>
      {isDef(children) ? (
        <>
          <DividerLine
            color={color}
            dashed={dashed}
            position="left"
            adaptive={contentPosition !== 'left'}
          />

          <Text style={[STYLES.text, textStyle]}>{children}</Text>

          <DividerLine
            color={color}
            dashed={dashed}
            position="right"
            adaptive={contentPosition !== 'right'}
          />
        </>
      ) : (
        <DividerLine color={color} dashed={dashed} position="center" />
      )}
    </View>
  )
}

export default memo<typeof Divider>(Divider)
