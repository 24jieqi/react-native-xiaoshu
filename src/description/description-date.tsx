import React, { memo } from 'react'

import { formatDate } from '../date-picker-view/helper'

import Description from './description'
import type { DescriptionDateProps } from './interface'

const DescriptionDate: React.FC<DescriptionDateProps> = ({
  text,
  mode = 'Y-m',
  ...restProps
}) => {
  const value = formatDate(mode, text)

  return <Description {...restProps} text={value} />
}

const DescriptionDateMemo: typeof DescriptionDate =
  memo<typeof DescriptionDate>(DescriptionDate)

export default DescriptionDateMemo
