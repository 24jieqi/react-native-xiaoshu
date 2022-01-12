import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconDeleteFill = genIcon({
  render: (_, { themeVar }) => {
    return (
      <Path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm6.25 11H5.75a.75.75 0 1 0 0 1.5h12.5a.75.75 0 1 0 0-1.5z"
        fill={themeVar.error}
        fillRule="evenodd"
      />
    )
  },
})

export default IconDeleteFill
