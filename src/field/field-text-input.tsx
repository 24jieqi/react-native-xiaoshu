import React, { memo } from 'react'

import Cell from '../cell'
import TextInput from '../text-input'
import Theme from '../theme'

import { pickCellProps } from './helper'
import type { FieldTextInputProps } from './interface'

/**
 * Field 输入框
 * @description 表单中的输入框组件。
 * @description TODO 自定义输入项
 * @description TODO 解决多行输入高度没对齐的问题
 */
const FieldTextInput: React.FC<FieldTextInputProps> = ({
  // TextInput 属性
  textAlign = 'right',
  type,
  textInputStyle,
  textInputBordered,
  ...restProps
}) => {
  const { cellProps, otherProps } = pickCellProps(restProps)

  if (cellProps.vertical) {
    textAlign = 'left'
    type = 'textarea'
  }

  if (type === 'textarea') {
    textAlign = 'left'
    textInputBordered = true
    cellProps.vertical = true
  }

  const TOKENS = Theme.useThemeTokens()

  return (
    <Cell
      {...cellProps}
      valueStyle={[
        cellProps.vertical
          ? {
              marginTop: TOKENS.space_2,
            }
          : null,
        cellProps.valueStyle,
      ]}
      value={
        <TextInput
          {...otherProps}
          style={textInputStyle}
          type={type}
          bordered={textInputBordered}
          textAlign={textAlign}
        />
      }
    />
  )
}

export default memo(FieldTextInput)
