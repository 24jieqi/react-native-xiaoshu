import React from 'react'
import { G, Line } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconPlusOutline = genIcon({
  render: color => {
    return (
      <G
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Line x1="12" y1="4" x2="12" y2="20" />
        <Line x1="4" y1="12" x2="20" y2="12" />
      </G>
    )
  },
})

export default IconPlusOutline
