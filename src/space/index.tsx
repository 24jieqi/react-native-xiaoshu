import React, { memo, Children } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'

import { varCreator as varCreatorBlank } from '../blank/style'
import { getDefaultValue } from '../helpers'
import { useThemeTokens, createVar } from '../theme'

import type { SpaceProps } from './interface'

const NO_GAP = 0

const getMarginGap = (d: boolean | number, gap: number) =>
  d ? (typeof d === 'number' ? d : gap) : 0

/**
 * Space 间距
 */
const Space: React.FC<SpaceProps> = ({
  direction = 'vertical',
  wrap = false,
  gap = 's',
  gapVertical,
  gapHorizontal,
  head,
  tail,
  justify,
  align,

  style,
  children,

  ...restProps
}) => {
  const TOKENS = useThemeTokens()
  const CV_BLANK = createVar(TOKENS, varCreatorBlank)

  const defaultGap: number =
    typeof gap === 'string' ? CV_BLANK[`blank_size_${gap}`] : gap
  const isVertical = direction === 'vertical'
  const _gapVertical = getDefaultValue(gapVertical, defaultGap)
  const _gapHorizontal = getDefaultValue(gapHorizontal, defaultGap)
  const wrapperStyle: ViewStyle = {
    flexDirection: isVertical ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify,
    alignItems: align,
    ...(isVertical
      ? {
          paddingTop: getMarginGap(head, _gapVertical),
          paddingBottom: getMarginGap(tail, _gapVertical),
        }
      : {
          paddingLeft: getMarginGap(head, _gapHorizontal),
          paddingRight: getMarginGap(tail, _gapHorizontal),
        }),
  }
  const itemStyle: ViewStyle = {
    marginBottom: _gapVertical,
    marginRight: isVertical ? 0 : _gapHorizontal,
  }

  const childArray = Children.toArray(children)
  const count = childArray.length

  return (
    <View {...restProps} style={[wrapperStyle, style]}>
      {childArray.map((child, index) => {
        return (
          <View
            key={index}
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
      })}
    </View>
  )
}

export default memo<typeof Space>(Space)
