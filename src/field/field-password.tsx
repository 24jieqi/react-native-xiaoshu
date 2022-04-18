import React, { memo } from 'react'

import Cell from '../cell'
import PasswordInput from '../password-input'
import Theme from '../theme'

import type {
  FieldPasswordInputProps,
  FieldTextCellPropsUsed,
} from './interface'

/**
 * Field 密码输入
 * @description 表单中的密码输入组件。
 */
const FieldPasswordInput: React.FC<FieldPasswordInputProps> = ({
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

  const TOKENS = Theme.useThemeTokens()

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
              marginTop: TOKENS.space_2,
            }
          : null,
      ]}
      value={
        <PasswordInput
          {...restProps}
          style={textInputStyle}
          bordered={textInputBordered}
          textAlign={textAlign}
        />
      }
    />
  )
}

export default memo(FieldPasswordInput)
