import React, { memo } from 'react'

import Cell from '../cell'
import Switch from '../switch'

import type { FieldSwitchProps, FieldSwitchCellPropsUsed } from './interface'

function FieldSwitch<ActiveValueT = boolean, InactiveValueT = boolean>({
  // TODO 优化属性传递
  innerStyle,
  title,
  titleStyle,
  titleTextStyle,
  titleExtra,
  valueStyle,
  valueExtra,
  contentStyle,
  bordered = true,
  isLink = false,
  onPressLink,
  center = false,
  arrowDirection = 'right',
  required = false,
  vertical = false,

  ...restProps
}: FieldSwitchProps<ActiveValueT, InactiveValueT>) {
  const cellProps: FieldSwitchCellPropsUsed = {
    innerStyle,
    title,
    titleStyle,
    titleTextStyle,
    titleExtra,
    valueStyle: [
      { flexDirection: 'row', justifyContent: 'flex-end' },
      valueStyle,
    ],
    valueExtra,
    contentStyle,
    bordered,
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
      value={<Switch<ActiveValueT, InactiveValueT> {...restProps} />}
    />
  )
}

export default memo(FieldSwitch) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean,
>(
  p: FieldSwitchProps<ActiveValueT, InactiveValueT>,
) => JSX.Element
