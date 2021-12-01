import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowDownFill = genIcon({
  render: color => {
    return (
      <Polyline
        points="4,8 12,16 20,8"
        fill={color}
        stroke={color}
        strokeWidth={0}
      />
    )
  },
})

export default IconArrowDownFill
