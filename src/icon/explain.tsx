import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconExplainOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M19.5 3A1.5 1.5 0 0 1 21 4.5v15.75a1.5 1.5 0 0 1-1.5 1.5h-14a1.5 1.5 0 0 1-1.5-1.5V4.5A1.5 1.5 0 0 1 5.5 3zm0 1.5h-14v15.75h14V4.5zm-5.583 11a.75.75 0 0 1 .102 1.493l-.102.007h-5.77a.75.75 0 0 1-.101-1.493l.101-.007h5.77zm-2.16-4a.75.75 0 0 1 .102 1.493l-.102.007h-3.61a.75.75 0 0 1-.101-1.493l.101-.007h3.61zm5.159-4a.75.75 0 0 1 .102 1.493L16.916 9H8.147a.75.75 0 0 1-.101-1.493l.101-.007h8.769z"
      />
    )
  },
})

export default IconExplainOutline
