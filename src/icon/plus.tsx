import React, { memo } from 'react'
import { Svg, G, Line } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'
import * as helper from './helper'

interface IconPlusOutlineProps extends IconCommonOutlineProps {}

const IconPlusOutline: React.FC<IconPlusOutlineProps> = ({
  size = helper.DEFAULT_SIZE,
  color = helper.DEFAULT_COLOR,
  style = helper.ICON_DEFAULT_STYLE,
  strokeWidth = helper.STROKE_WIDTH,
  hitSlop = helper.DEFAULT_HIT_SLOP,
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      style={style}
      height={size}
      width={size}
      hitSlop={hitSlop}
      viewBox="0 0 24 24">
      <G
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Line x1="12" y1="4" x2="12" y2="20" />
        <Line x1="4" y1="12" x2="20" y2="12" />
      </G>
    </Svg>
  )
}

export default memo(IconPlusOutline)
