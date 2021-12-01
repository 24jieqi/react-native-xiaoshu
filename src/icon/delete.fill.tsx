import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconDeleteFill = genIcon({
  size: 'small',
  render: (_, { themeVar }) => {
    return (
      <Path
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm4.25 7h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 1 0 0-1.5z"
        fill={themeVar.error}
        fillRule="evenodd"
      />
    )
  },
})

export default IconDeleteFill
