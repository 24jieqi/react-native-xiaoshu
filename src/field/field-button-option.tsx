import React, { memo } from 'react'

import ButtonOptionGroup from '../button/button-option-group'
import Cell from '../cell'

import { pickCellProps } from './helper'
import type { FieldButtonOptionProps } from './interface'

const FieldButtonOption: React.FC<FieldButtonOptionProps> = restProps => {
  const { cellProps, otherProps } = pickCellProps(restProps)

  return (
    <Cell
      {...cellProps}
      center={!restProps.vertical}
      value={
        <ButtonOptionGroup
          {...otherProps}
          justify={restProps.vertical ? 'flex-start' : 'flex-end'}
          align="center"
          wrap={restProps.vertical}
        />
      }
    />
  )
}

export default memo(FieldButtonOption)
