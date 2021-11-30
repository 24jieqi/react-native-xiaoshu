import React, { memo } from 'react'
import { Svg, Circle } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'
import * as helper from './helper'

interface IconCircleOutlineProps extends IconCommonOutlineProps {}

const IconCircleOutline: React.FC<IconCircleOutlineProps> = ({
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
      <Circle
        cx="12"
        cy="12"
        r={12 - strokeWidth / 2}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  )
}

export default memo(IconCircleOutline)
