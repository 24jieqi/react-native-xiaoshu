import React from 'react'
import { Polyline } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconArrowDownOutline = genIcon({
  render: color => {
    return (
      <Polyline
        points="4,8 12,16 20,8"
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
})

export default IconArrowDownOutline
