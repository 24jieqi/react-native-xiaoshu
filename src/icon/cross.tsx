import React from 'react'
import { G, Line } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconCrossOutline = genIcon({
  render: color => {
    return (
      <G
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Line x1="4" y1="4" x2="20" y2="20" />
        <Line x1="20" y1="4" x2="4" y2="20" />
      </G>
    )
  },
})

export default IconCrossOutline
