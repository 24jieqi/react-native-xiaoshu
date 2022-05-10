import React from 'react'
import { G, Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconStarSquareOutline = genIcon({
  render: color => {
    return (
      <G
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round">
        <Path d="M4.25 3.25h15.5v17.833H4.25z" />
        <Path d="M12 6.333l1.442 2.922 3.225.469-2.334 2.274.551 3.212L12 13.694 9.116 15.21l.55-3.212-2.333-2.274 3.225-.469z" />
        <Path strokeLinecap="round" d="M8.032 18.04h8.167" />
      </G>
    )
  },
})

export default IconStarSquareOutline
