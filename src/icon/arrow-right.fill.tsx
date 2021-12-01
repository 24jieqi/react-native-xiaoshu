import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowRightFill = genIcon({
  render: color => {
    return (
      <Polyline
        points="8,4 16,12 8,20"
        fill={color}
        stroke={color}
        strokeWidth={0}
      />
    )
  },
})

export default IconArrowRightFill
