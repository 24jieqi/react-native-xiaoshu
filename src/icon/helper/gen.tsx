import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Svg } from 'react-native-svg'

import type { ThemeVarType } from '../../theme'
import { useTheme } from '../../theme'
import {
  getDefaultValue,
  hex2rgba,
  pickTouchablePropsField,
  omitTouchablePropsField,
} from '../../helpers'
import type { IconCommonProps } from '../interface'
import * as helper from './'

type OutlineRender = (
  color: string,
  props: {
    themeVar: ThemeVarType
    disabled?: boolean
  },
) => React.ReactNode

type GenIconOption = {
  render: OutlineRender
  size?: 'default' | 'small'
}

const touchableOpacityStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  // 无论大小图表都保持同一个占用空间
  width: 24,
  height: 24,
  // backgroundColor: '#f30',
}

/**
 * 生成一个 Outline 类型的 icon 组件
 */
export const genIcon = ({
  render,
  size = 'default',
}: GenIconOption): React.FC<IconCommonProps> => {
  return memo(
    ({
      size: iconSize,
      color,
      svgStyle,

      // 点击相关的属性
      style,
      hitSlop,
      ...restProps
    }) => {
      const THEME_VAR = useTheme()
      /** 适用于点击的属性 */
      const touchableOpacityProps = pickTouchablePropsField(restProps)
      /** 剔除点击相关的属性 */
      const svgProps = omitTouchablePropsField(restProps)
      /** viewBox 的尺寸 */
      const viewBoxSize =
        size === 'default' ? helper.DEFAULT_SIZE : helper.SMALL_SIZE
      /** 向外延伸的点击范围 */
      const hitSlopSize =
        size === 'default' ? helper.DEFAULT_HIT_SLOP : helper.SMALL_HIT_SLOP

      // 修正数据
      iconSize = getDefaultValue(iconSize, viewBoxSize)
      color = getDefaultValue(color, THEME_VAR.icon_color)
      hitSlop = getDefaultValue(hitSlop, hitSlopSize)

      // 继续修正
      if (restProps.disabled) {
        color = hex2rgba(color, 0.4)
      }

      return (
        <TouchableWithoutFeedback {...touchableOpacityProps} hitSlop={hitSlop}>
          <View
            style={style || touchableOpacityStyle}
            pointerEvents={svgProps.pointerEvents}>
            <Svg
              {...svgProps}
              style={svgStyle || touchableOpacityStyle}
              height={iconSize}
              width={iconSize}
              viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
              {render(color, {
                themeVar: THEME_VAR,
                disabled: restProps.disabled,
              })}
            </Svg>
          </View>
        </TouchableWithoutFeedback>
      )
    },
  )
}
