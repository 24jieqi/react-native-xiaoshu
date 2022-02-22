import React, { memo } from 'react'

import { renderDate } from '../date-picker/range-view'

import Description from './description'
import type { DescriptionDateProps } from './interface'

const DescriptionDate: React.FC<DescriptionDateProps> = ({
  text,
  mode = 'Y-m',
  ...restProps
}) => {
  const value = renderDate(text, mode)

  return <Description {...restProps} text={value} />
}

export default memo<typeof DescriptionDate>(DescriptionDate)
