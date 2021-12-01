import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowLeftOutline = genIcon({
  render: color => {
    return (
      <Polyline
        points="16,4 8,12 16,20"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
})

export default IconArrowLeftOutline
