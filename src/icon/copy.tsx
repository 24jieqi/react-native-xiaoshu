import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconCopyOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M16.716 4.91c1.049 0 1.9.852 1.9 1.9v13.2a1.9 1.9 0 0 1-1.9 1.9H4.682a1.9 1.9 0 0 1-1.9-1.9V6.81c0-1.048.851-1.9 1.9-1.9zm0 1.5H4.682a.4.4 0 0 0-.4.4v13.2c0 .222.18.4.4.4h12.034a.4.4 0 0 0 .4-.4V6.81a.4.4 0 0 0-.4-.4zM6.144 2.265l12.404.017a2.75 2.75 0 0 1 2.74 2.583l.006.167v13.73a.75.75 0 0 1-1.493.101l-.007-.101V5.03a1.25 1.25 0 0 0-1.12-1.243l-.128-.007-12.404-.017a.75.75 0 0 1-.1-1.493l.102-.007z"
      />
    )
  },
})

export default IconCopyOutline
