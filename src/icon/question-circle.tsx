import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconQuestionCircleOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M12.062 1.5c5.8 0 10.5 4.701 10.5 10.5s-4.7 10.5-10.5 10.5c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5zm0 1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 13.127a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm0-10.84a3.75 3.75 0 0 1 .751 7.425v1.69a.75.75 0 0 1-1.494.102l-.007-.101v-2.366a.75.75 0 0 1 .75-.75 2.25 2.25 0 1 0-2.25-2.25.75.75 0 0 1-1.5 0 3.75 3.75 0 0 1 3.75-3.75z"
      />
    )
  },
})

export default IconQuestionCircleOutline
