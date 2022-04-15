import Color from 'color'
import React from 'react'
import { Circle } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconCircleOutline = genIcon({
  render: (color, { disabled }) => {
    return (
      <Circle
        cx="12"
        cy="12"
        r={11}
        fill={disabled ? Color(color).alpha(0.05).string() : 'none'}
        stroke={color}
        strokeWidth={1.4}
      />
    )
  },
})

export default IconCircleOutline
