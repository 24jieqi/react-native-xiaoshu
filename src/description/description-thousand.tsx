import React, { memo } from 'react'

import { formatThousandths } from '../helpers'

import Description from './description'
import type { DescriptionThousandProps } from './interface'

const DescriptionThousand: React.FC<DescriptionThousandProps> = ({
  text,
  ...restProps
}) => {
  const value = formatThousandths(`${text}`)

  return <Description {...restProps} text={value} />
}

export default memo<typeof DescriptionThousand>(DescriptionThousand)
