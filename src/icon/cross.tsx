import React, { memo } from 'react'
import { Svg, G, Polyline } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'
import * as helper from './helper'

interface IconCrossOutlineProps extends IconCommonOutlineProps {}

const IconCrossOutline: React.FC<IconCrossOutlineProps> = ({
  size = helper.DEFAULT_SIZE,
  color = helper.DEFAULT_COLOR,
  style = helper.ICON_DEFAULT_STYLE,
  strokeWidth = helper.STROKE_WIDTH,
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      style={style}
      height={size}
      width={size}
      viewBox="0 0 24 24">
      <G
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Polyline points="4,4 20,20" />
        <Polyline points="20,4 4,20" />
      </G>
    </Svg>
  )
}

export default memo(IconCrossOutline)
