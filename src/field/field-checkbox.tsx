import React, { memo } from 'react'

import Cell from '../cell'
import CheckboxGroup from '../checkbox/checkbox-group'
import Theme from '../theme'

import { pickCellProps } from './helper'
import type { FieldCheckboxProps } from './interface'
import { varCreator } from './style'

const FieldCheckbox: React.FC<FieldCheckboxProps> = restProps => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const { cellProps, otherProps } = pickCellProps(restProps)

  return (
    <Cell
      {...cellProps}
      center={!restProps.vertical}
      value={
        <CheckboxGroup
          {...otherProps}
          direction="horizontal"
          gapHorizontal={CV.field_checkbox_gap}
          justify={restProps.vertical ? 'flex-start' : 'flex-end'}
          align="center"
        />
      }
    />
  )
}

export default memo(FieldCheckbox)
