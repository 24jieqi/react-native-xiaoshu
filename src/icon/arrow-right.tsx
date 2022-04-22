import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowRightOutline = genIcon({
  render: color => {
    return (
      <Polyline
        points="8,4 16,12 8,20"
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
})

export default IconArrowRightOutline
