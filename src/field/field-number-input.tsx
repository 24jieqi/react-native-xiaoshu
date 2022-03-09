import React, { memo } from 'react'

import Cell from '../cell'
import NumberInput from '../number-input'
import { useTheme } from '../theme'

import type { FieldNumberInputProps, FieldTextCellPropsUsed } from './interface'

/**
 * Field 输入框
 * @description 表单中的输入框组件。
 */
const FieldNumberInput: React.FC<FieldNumberInputProps> = ({
  // TODO 优化属性传递
  style,
  innerStyle,
  title,
  titleStyle,
  titleTextStyle,
  titleExtra,
  valueStyle,
  valueExtra,
  contentStyle,
  divider = true,
  isLink = false,
  onPressLink,
  center = false,
  arrowDirection = 'right',
  required = false,
  vertical = false,

  // TextInput 属性
  textAlign = 'right',
  textInputStyle,
  textInputBordered,
  ...restProps
}) => {
  if (vertical) {
    textAlign = 'left'
  }

  const THEME_VAR = useTheme()

  const cellProps: FieldTextCellPropsUsed = {
    style,
    innerStyle,
    title,
    titleStyle,
    titleTextStyle,
    titleExtra,
    valueExtra,
    contentStyle,
    divider,
    isLink,
    onPressLink,
    center,
    arrowDirection,
    required,
    vertical,
  }

  return (
    <Cell
      {...cellProps}
      valueStyle={[
        valueStyle,
        vertical
          ? {
              marginTop: THEME_VAR.space_2,
            }
          : null,
      ]}
      value={
        <NumberInput
          {...restProps}
          style={textInputStyle}
          bordered={textInputBordered}
          textAlign={textAlign}
        />
      }
    />
  )
}

export default memo(FieldNumberInput)
