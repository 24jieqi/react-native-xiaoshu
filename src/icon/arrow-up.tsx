import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowUpOutline = genIcon({
  render: color => {
    return (
      <Polyline
        points="4,16 12,8 20,16"
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
})

export default IconArrowUpOutline
