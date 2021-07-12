import React, { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

import type { IconCommonOutlineProps } from './interface'

interface IconSuccessOutlineProps extends IconCommonOutlineProps {}

const IconSuccessOutline: React.FC<IconSuccessOutlineProps> = ({
  size = 24,
  color = '#666',
  strokeWidth = 2,
  ...restProps
}) => {
  return (
    <Svg {...restProps} height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M6,12 10,16 18,6"
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
