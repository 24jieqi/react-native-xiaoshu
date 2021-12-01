import React from 'react'
import { G, Polyline } from 'react-native-svg'

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
        <Polyline points="4,4 20,20" />
        <Polyline points="20,4 4,20" />
      </G>
    )
  },
})

export default IconCrossOutline
