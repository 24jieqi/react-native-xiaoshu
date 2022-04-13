import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconSearchOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M5.226 5.231A8.556 8.556 0 0 1 17.83 16.78l.025.021 3.038 3.039a.75.75 0 0 1-.984 1.128l-.077-.067-3.038-3.039-.021-.024A8.556 8.556 0 0 1 5.226 5.23zm1.06 1.061a7.056 7.056 0 1 0 9.979 9.978 7.056 7.056 0 0 0-9.979-9.978z"
      />
    )
  },
})

export default IconSearchOutline
