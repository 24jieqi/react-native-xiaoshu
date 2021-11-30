import React, { memo } from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import type { IconCommonFillProps } from './interface'
import * as helper from './helper'

interface IconCheckedFillProps extends IconCommonFillProps {}

const IconCheckedFill: React.FC<IconCheckedFillProps> = ({
  size = helper.DEFAULT_SIZE,
  color = helper.DEFAULT_COLOR,
  style = helper.ICON_DEFAULT_STYLE,
  hitSlop = helper.DEFAULT_HIT_SLOP,
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      style={style}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      hitSlop={hitSlop}>
      <Circle cx="12" cy="12" r="12" fill={color} />

      <Path
        d="M6,12 10,16 18,7"
        fill="none"
        stroke="#fff"
        strokeWidth={helper.STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default memo(IconCheckedFill)
