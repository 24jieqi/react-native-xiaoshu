import React, { useMemo, memo } from 'react'
import type { DimensionValue, ViewStyle } from 'react-native'
import { View } from 'react-native'

import Theme from '../theme'

import type { DividerLineProps } from './interface'
import { varCreator } from './style'

/**
 * 分割线
 */
const DividerLine: React.FC<DividerLineProps> = ({
  theme,
  color,
  position,
  adaptive = true,
  direction = 'horizontal',
}) => {
  const isVertical = direction === 'vertical'
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })

  const viewStyle = useMemo(() => {
    if (isVertical) {
      return {
        flex: 1,
        width: 1,
        height: '100%' as DimensionValue,
        backgroundColor: color,
      }
    }

    const s: ViewStyle = {
      flex: 1,
      maxWidth: 'auto',
      height: 1,
      backgroundColor: color,
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
    adaptive,
    color,
    isVertical,
    position,
    CV.divider_margin_horizontal,
    CV.divider_content_left_width,
    CV.divider_content_right_width,
  ])

  return <View style={viewStyle} />
}

export default memo(DividerLine)
