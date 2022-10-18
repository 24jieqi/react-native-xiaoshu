import React, { memo } from 'react'

import Cell from '../cell'
import Switch from '../switch'

import { pickCellProps } from './helper'
import type { FieldSwitchProps } from './interface'

function FieldSwitch<ActiveValueT = boolean, InactiveValueT = boolean>(
  props: FieldSwitchProps<ActiveValueT, InactiveValueT>,
) {
  const { cellProps, otherProps } = pickCellProps(props)

  return (
    <Cell
      {...cellProps}
      valueStyle={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        cellProps.valueStyle,
      ]}
      value={<Switch<ActiveValueT, InactiveValueT> {...otherProps} />}
    />
  )
}

export default memo(FieldSwitch) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean,
>(
  p: FieldSwitchProps<ActiveValueT, InactiveValueT>,
) => JSX.Element
