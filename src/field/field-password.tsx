import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import Cell from '../cell'
import PasswordInput from '../password-input'
import Theme from '../theme'

import { pickCellProps } from './helper'
import type { FieldPasswordInputProps } from './interface'

/**
 * Field 密码输入
 * @description 表单中的密码输入组件。
 */
const FieldPasswordInput: React.FC<FieldPasswordInputProps> = ({
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
  const outerValueStyle = StyleSheet.flatten(cellProps.valueStyle || {})

  return (
    <Cell
      {...cellProps}
      valueStyle={[
        cellProps.valueStyle,
        cellProps.vertical
          ? {
              marginTop: outerValueStyle.marginTop ?? TOKENS.space_2,
            }
          : null,
      ]}
      value={
        <PasswordInput
          {...otherProps}
          style={textInputStyle}
          bordered={textInputBordered}
          textAlign={textAlign}
        />
      }
    />
  )
}

export default memo(FieldPasswordInput)
