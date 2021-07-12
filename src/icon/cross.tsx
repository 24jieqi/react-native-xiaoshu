import React, { memo } from 'react'
import { Svg, G, Polyline } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'

interface IconCrossOutlineProps extends IconCommonOutlineProps {}

const IconCrossOutline: React.FC<IconCrossOutlineProps> = ({
  size = 24,
  color = '#666',
  strokeWidth = 2,
  ...restProps
}) => {
  return (
    <Svg {...restProps} height={size} width={size} viewBox="0 0 24 24">
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
