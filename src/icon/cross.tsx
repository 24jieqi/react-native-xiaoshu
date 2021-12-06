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
        <Line x1="6" y1="6" x2="18" y2="18" />
        <Line x1="18" y1="6" x2="6" y2="18" />
      </G>
    )
  },
})

export default IconCrossOutline
