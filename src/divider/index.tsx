import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { getDefaultValue, isDef } from '../helpers'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { DividerProps } from './interface'
import DividerLine from './line'
import { varCreator, styleCreator } from './style'

/**
 * Divider 分割线
 * @description 用于将内容分隔为多个区域。
 */
const Divider: React.FC<DividerProps> = ({
  children,
  style,
  textStyle,
  type = 'light',
  direction = 'horizontal',
  dashed = false,
  color,
  contentPosition = 'center',
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)
  const isVertical = direction === 'vertical'

  color = getDefaultValue(
    color,
    type === 'dark' ? CV.divider_color_dark : CV.divider_color_light,
  )

  return (
    <View
      style={[
        STYLES.divider,
        isVertical ? STYLES.divider_vertical : null,
        style,
      ]}>
      {isVertical ? (
        <DividerLine
          color={color}
          dashed={dashed}
          position="center"
          direction={direction}
        />
      ) : isDef(children) ? (
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
