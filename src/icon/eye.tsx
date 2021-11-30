import React, { memo } from 'react'
import { Svg, G, Path } from 'react-native-svg'
import * as helper from './helper'
import type { IconCommonOutlineProps } from './interface'

const Eye: React.FC<IconCommonOutlineProps> = ({
  size = helper.DEFAULT_SIZE,
  color = helper.DEFAULT_COLOR,
  strokeWidth = helper.STROKE_WIDTH,
  style = helper.ICON_DEFAULT_STYLE,
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
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round">
        <Path d="M21.988 12.22s-4.788 6.122-10.19 6.122c-5.403 0-9.782-6.121-9.782-6.121s4.38-6.208 9.781-6.208c5.403 0 10.19 6.208 10.19 6.208z" />
        <Path d="M15.048 12.236a3.004 3.004 0 1 1-6.007 0 3.004 3.004 0 0 1 6.007 0z" />
      </G>
    </Svg>
  )
}

export default memo(Eye)
