import React from 'react'
import { Path } from 'react-native-svg'

import { genIcon } from './helper/gen'

const IconQuestionOutline = genIcon({
  render: color => {
    return (
      <Path
        fill={color}
        fillRule="nonzero"
        d="M11.649 19.349a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zm0-16.062a5.399 5.399 0 0 1 .75 10.745V17a.75.75 0 0 1-1.493.102L10.899 17v-3.666a.75.75 0 0 1 .75-.75A3.899 3.899 0 1 0 7.75 8.685a.75.75 0 0 1-1.5 0 5.399 5.399 0 0 1 5.399-5.398z"
      />
    )
  },
})

export default IconQuestionOutline
