import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconRemoveFill = genIcon({
  render: color => {
    return (
      <Path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm4.667 6.333a.6.6 0 0 0-.849 0L12 11.151 8.182 7.333l-.075-.063a.6.6 0 0 0-.774.912L11.151 12l-3.818 3.818-.063.075a.6.6 0 0 0 .912.774L12 12.849l3.818 3.818.075.063a.6.6 0 0 0 .774-.912L12.849 12l3.818-3.818.063-.075a.6.6 0 0 0-.063-.774z"
        fill={color}
        fillRule="evenodd"
        fillOpacity="0.65"
      />
    )
  },
})

export default IconRemoveFill
