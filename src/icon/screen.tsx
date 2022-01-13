import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconScreenOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M3 3.4l-.094.007a.6.6 0 0 0-.402.931L5.808 9.18V13a.6.6 0 0 0 .6.6H9.6l.098-.008a.6.6 0 0 0 .502-.592V9.179l3.297-4.841A.6.6 0 0 0 13 3.4H3zm8.865 1.2L9.103 8.657l-.044.078a.6.6 0 0 0-.06.26V12.4H7.008V8.994l-.007-.09a.6.6 0 0 0-.097-.248L4.136 4.6h7.729z"
      />
    )
  },
})

export default IconScreenOutline
