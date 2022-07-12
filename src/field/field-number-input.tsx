import React, { memo } from 'react'

import Cell from '../cell'
import NumberInput from '../number-input'
import Theme from '../theme'

import { pickCellProps } from './helper'
import type { FieldNumberInputProps } from './interface'

/**
 * Field 输入框
 * @description 表单中的输入框组件。
 */
const FieldNumberInput: React.FC<FieldNumberInputProps> = ({
  // TextInput 属性
  textAlign = 'right',
  textInputStyle,
  textInputBordered,
  ...restProps
}) => {
  const { cellProps, otherProps } = pickCellProps(restProps)

  if (cellProps.vertical) {
    textAlign = 'left'
  }

  const TOKENS = Theme.useThemeTokens()

  return (
    <Cell
      {...cellProps}
      valueStyle={[
        cellProps.valueStyle,
        cellProps.vertical
          ? {
              marginTop: TOKENS.space_2,
            }
          : null,
      ]}
      value={
        <NumberInput
          {...otherProps}
          style={textInputStyle}
          bordered={textInputBordered}
          textAlign={textAlign}
        />
      }
    />
  )
}

export default memo(FieldNumberInput)
