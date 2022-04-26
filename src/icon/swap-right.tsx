import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconSwapRightOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M14.965 9.927a.75.75 0 0 1 .977.065l.073.084 3.334 4.433a.75.75 0 0 1-.493 1.193l-.106.007h-14a.75.75 0 0 1-.102-1.493l.102-.007h12.497l-2.43-3.232a.75.75 0 0 1 .065-.977l.083-.073z"
      />
    )
  },
})

export default IconSwapRightOutline
