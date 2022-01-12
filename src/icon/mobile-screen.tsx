import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconMobileScreenOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M13 3.5A1.5 1.5 0 0 1 14.5 5v4.248h7.641a.75.75 0 0 1 .743.649l.007.102v9.751a.75.75 0 0 1-.648.743l-.102.007h-9.106l-.001-.002L13 20.5H3A1.5 1.5 0 0 1 1.5 19V5A1.5 1.5 0 0 1 3 3.5zM13 5H3v14h10V5zm8.391 5.748H14.5V19h6.891v-8.252zm-10.49 5.002a.75.75 0 0 1 .101 1.493l-.102.007H4.9a.75.75 0 0 1-.102-1.493l.102-.007H10.9z"
      />
    )
  },
})

export default IconMobileScreenOutline
