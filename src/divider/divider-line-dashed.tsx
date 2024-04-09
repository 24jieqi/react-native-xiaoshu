import React, { useState, useCallback, useMemo, memo } from 'react'
import type { ViewStyle, LayoutChangeEvent, DimensionValue } from 'react-native'
import { View, useWindowDimensions } from 'react-native'
import { Line, Svg } from 'react-native-svg'

import Theme from '../theme'

import type { DividerLineProps } from './interface'
import { varCreator } from './style'

/**
 * 分割线
 */
const DividerLineDashed: React.FC<DividerLineProps> = ({
  theme,
  color,
  position,
  adaptive = true,
  direction = 'horizontal',
}) => {
  const isVertical = direction === 'vertical'
  const { width } = useWindowDimensions()
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })
  const [size, setSize] = useState(
    isVertical ? CV.divider_vertical_min_height : width,
  )

  const viewStyle = useMemo(() => {
    if (isVertical) {
      return {
        flex: 1,
        width: 1,
        height: '100%' as DimensionValue,
      }
    }

    const s: ViewStyle = {
      flex: 1,
      maxWidth: 'auto',
    }

    if (position === 'left') {
      s.marginRight = CV.divider_margin_horizontal
    }

    if (position === 'right') {
      s.marginLeft = CV.divider_margin_horizontal
    }

    if (!adaptive) {
      s.maxWidth =
        position === 'left'
          ? CV.divider_content_left_width
          : CV.divider_content_right_width
    }

    return s
  }, [
    isVertical,
    position,
    adaptive,
    CV.divider_margin_horizontal,
    CV.divider_content_left_width,
    CV.divider_content_right_width,
  ])

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      setSize(e.nativeEvent.layout[isVertical ? 'height' : 'width'])
    },
    [isVertical],
  )

  return (
    <View onLayout={onLayout} style={viewStyle}>
      {isVertical ? (
        <Svg width={1} height={size} viewBox={`0 0 1 ${size}`}>
          <Line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2={size}
            strokeWidth={1}
            strokeDasharray="2 2"
            stroke={color}
          />
        </Svg>
      ) : (
        <Svg width={size} height={1} viewBox={`0 0 ${size} 1`}>
          <Line
            x1="0"
            y1="0.5"
            x2={size}
            y2="0.5"
            strokeWidth={1}
            strokeDasharray="2 2"
            stroke={color}
          />
        </Svg>
      )}
    </View>
  )
}

export default memo(DividerLineDashed)
