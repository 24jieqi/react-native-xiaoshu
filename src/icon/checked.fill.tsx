import React from 'react'
import { Circle, Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconCheckedFill = genIcon({
  render: color => {
    return (
      <>
        <Circle cx="12" cy="12" r="12" fill={color} />

        <Path
          d="M6,12 10,16 18,7"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )
  },
})

export default IconCheckedFill
