import isNil from 'lodash/isNil'
import React, { memo } from 'react'

import { formatDate } from '../date-picker-view/helper'

import Description from './description'
import type { DescriptionDateProps } from './interface'

const DescriptionDate: React.FC<DescriptionDateProps> = ({
  text,
  mode = 'Y-m',
  ...restProps
}) => {
  const value = !isNil(text) ? formatDate(mode, text) : text

  return <Description {...restProps} text={value} />
}

export default memo(DescriptionDate)
