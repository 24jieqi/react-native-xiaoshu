import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowUpFill = genIcon({
  render: color => {
    return (
      <Polyline
        points="4,16 12,8 20,16"
        fill={color}
        stroke={color}
        strokeWidth={0}
      />
    )
  },
})

export default IconArrowUpFill
