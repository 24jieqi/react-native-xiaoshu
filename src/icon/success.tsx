import React, { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'
import * as helper from './helper'

interface IconSuccessOutlineProps extends IconCommonOutlineProps {}

const IconSuccessOutline: React.FC<IconSuccessOutlineProps> = ({
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
      <Path
        d="M6,12 12,18 18,6"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default memo(IconSuccessOutline)
