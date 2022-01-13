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
          d="M19.184 7.621l.195.19c.17.164.158.426-.02.599l-8.525 8.25c-.265.257-.7.245-.974-.019l-3.716-3.596a.437.437 0 0 1-.047-.598l.347-.425a.463.463 0 0 1 .597-.095l3.006 1.944c.158.103.431.09.58-.027l7.942-6.246a.486.486 0 0 1 .615.023z"
          fill={color}
          fillRule="nonzero"
        />
      </>
    )
  },
})

export default IconSuccessCircleOutline
