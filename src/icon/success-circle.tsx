import React from 'react'
import { Circle, Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconSuccessCircleOutline = genIcon({
  render: color => {
    return (
      <>
        <Circle
          cx="12"
          cy="12"
          r={11}
          fill="none"
          stroke={color}
          strokeWidth={1.4}
        />
        <Path
          d="M7,13 10,16 17,9"
          fill="none"
          stroke={color}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )
  },
})

export default IconSuccessCircleOutline
