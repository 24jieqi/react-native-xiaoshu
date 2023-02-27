import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import DividerLine from './divider-line'
import DividerLineDashed from './divider-line-dashed'
import type { DividerProps } from './interface'
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

  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const isVertical = direction === 'vertical'
  const Line = dashed ? DividerLineDashed : DividerLine

  color = getDefaultValue(
    color,
    type === 'dark' ? CV.divider_color_dark : CV.divider_color_light,
  )

  return (
    <View
      {...restProps}
      style={[
        STYLES.divider,
        isVertical ? STYLES.divider_vertical : null,
        style,
      ]}>
      {isVertical ? (
        <Line color={color} position="center" direction={direction} />
      ) : !isNil(children) ? (
        <>
          <Line
            color={color}
            position="left"
            adaptive={contentPosition !== 'left'}
          />

          <Text style={[STYLES.text, textStyle]}>{children}</Text>

          <Line
            color={color}
            position="right"
            adaptive={contentPosition !== 'right'}
          />
        </>
      ) : (
        <Line color={color} position="center" />
      )}
    </View>
  )
}

export default memo(Divider)
