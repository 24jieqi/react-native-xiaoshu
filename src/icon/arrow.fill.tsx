import React, { memo } from 'react'
import { Svg, Polyline } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'

type Direction = 'left' | 'up' | 'right' | 'down'

interface IconArrowFillProps extends IconCommonOutlineProps {
  direction?: Direction
}

const PointsMap: Record<Direction, string> = {
  right: '8,4 16,12 8,20',
  left: '16,4 8,12 16,20',
  up: '4,16 12,8 20,16',
  down: '4,8 12,16 20,8',
}

const IconArrowFill: React.FC<IconArrowFillProps> = ({
  size = 24,
  color = '#666',
  strokeWidth = 2,
  direction = 'right',
  ...restProps
}) => {
  return (
    <Svg {...restProps} height={size} width={size} viewBox="0 0 24 24">
      <Polyline
        points={PointsMap[direction]}
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  )
}

export default memo(IconArrowFill)
