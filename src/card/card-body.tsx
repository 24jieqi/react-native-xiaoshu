import isBoolean from 'lodash/isBoolean'
import isNumber from 'lodash/isNumber'
import React from 'react'

import Blank from '../blank'

import type { CardBodyProps } from './interface'

const CardBody: React.FC<CardBodyProps> = ({
  padding = true,
  ...restProps
}) => {
  const config =
    isBoolean(padding) || isNumber(padding)
      ? {
          left: padding,
          right: padding,
          top: padding,
          bottom: padding,
        }
      : padding

  return <Blank {...restProps} {...config} type="margin" />
}

export default CardBody
