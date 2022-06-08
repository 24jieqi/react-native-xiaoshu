import isBoolean from 'lodash/isBoolean'
import isNumber from 'lodash/isNumber'
import React from 'react'

import Blank from '../blank'
import { getDefaultValue } from '../helpers'

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
      : {
          left: getDefaultValue(padding.left, true),
          right: getDefaultValue(padding.right, true),
          top: getDefaultValue(padding.top, true),
          bottom: getDefaultValue(padding.bottom, true),
        }

  return <Blank {...restProps} {...config} type="margin" />
}

export default CardBody
