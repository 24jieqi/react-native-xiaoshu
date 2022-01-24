import React, { memo, Children } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'

import { useTheme } from '../theme'
import { isDef } from '../helpers'
import type { SpaceProps } from './interface'

const NO_GAP = 0

/**
 * Space 间距
 */
const Space: React.FC<SpaceProps> = ({
  direction = 'vertical',
  wrap = false,
  size,
  start,
  end,

  style,
  children,

  ...restProps
}) => {
  const THEME_VAR = useTheme()

  const isVertical = direction === 'vertical'
  const gapVertical = isDef(size) ? size : THEME_VAR.space_gap_vertical
  const gapHorizontal = isDef(size) ? size : THEME_VAR.space_gap_horizontal
  const wrapperStyle: ViewStyle = {
    flexDirection: isVertical ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...(isVertical
      ? {
          marginTop: start
            ? typeof start === 'number'
              ? start
              : gapVertical
            : 0,
          marginBottom: end ? (typeof end === 'number' ? end : gapVertical) : 0,
        }
      : {
          marginLeft: start
            ? typeof start === 'number'
              ? start
              : gapHorizontal
            : 0,
          marginRight: end
            ? typeof end === 'number'
              ? end
              : gapHorizontal
            : 0,
        }),
  }
  const itemStyle: ViewStyle = {
    marginBottom: gapVertical,
    marginRight: isVertical ? 0 : gapHorizontal,
  }

  const count = Children.count(children)

  return (
    <View {...restProps} style={[wrapperStyle, style]}>
      {Children.map(children, (child, index) => {
        return (
          child !== null &&
          child !== undefined && (
            <View
              style={[
                itemStyle,
                index + 1 === count
                  ? isVertical
                    ? {
                        marginBottom: NO_GAP,
                      }
                    : {
                        marginRight: NO_GAP,
                      }
                  : null,
              ]}>
              {child}
            </View>
          )
        )
      })}
    </View>
  )
}

export default memo<typeof Space>(Space)
