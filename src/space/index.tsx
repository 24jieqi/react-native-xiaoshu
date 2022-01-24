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
  head,
  tail,
  justify,
  align,

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
    justifyContent: justify,
    alignItems: align,
    ...(isVertical
      ? {
          marginTop: head ? (typeof head === 'number' ? head : gapVertical) : 0,
          marginBottom: tail
            ? typeof tail === 'number'
              ? tail
              : gapVertical
            : 0,
        }
      : {
          marginLeft: head
            ? typeof head === 'number'
              ? head
              : gapHorizontal
            : 0,
          marginRight: tail
            ? typeof tail === 'number'
              ? tail
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
