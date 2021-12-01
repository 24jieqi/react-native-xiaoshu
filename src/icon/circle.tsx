import React from 'react'
import { Circle } from 'react-native-svg'

import { hex2rgba, rgb2hex } from '../helpers'
import { genIcon } from './helper/gen'

const IconCircleOutline = genIcon({
  render: (color, { disabled }) => {
    return (
      <Circle
        cx="12"
        cy="12"
        r={11}
        fill={disabled ? hex2rgba(rgb2hex(color), 0.05) : 'none'}
        stroke={color}
        strokeWidth={1.4}
      />
    )
  },
})

export default IconCircleOutline
