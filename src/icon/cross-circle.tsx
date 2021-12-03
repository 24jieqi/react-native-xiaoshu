import React from 'react'
import { G, Circle, Line } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconCrossCircleOutline = genIcon({
  render: color => {
    return (
      <G
        fill="none"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Circle cx="12" cy="12" r={11} fill="none" strokeWidth={1.4} />
        <Line x1="8" y1="8" x2="16" y2="16" />
        <Line x1="16" y1="8" x2="8" y2="16" />
      </G>
    )
  },
})

export default IconCrossCircleOutline
