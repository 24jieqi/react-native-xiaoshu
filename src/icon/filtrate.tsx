import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconFiltrateOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M5 4.5l-.127.005c-1.128.091-1.767 1.38-1.112 2.34l4.524 6.277V18a1.5 1.5 0 0 0 1.5 1.5h3.876l.144-.007A1.5 1.5 0 0 0 15.161 18v-4.88l4.412-6.276c.678-.996-.035-2.344-1.24-2.344H5zM18.333 6l-4.672 6.66V18H9.785v-5.34L5 6h13.333z"
      />
    )
  },
})

export default IconFiltrateOutline
