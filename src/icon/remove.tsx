import React, { memo } from 'react'
import { Svg, Path } from 'react-native-svg'
import * as helper from './helper'
import type { IconCommonFillProps } from './interface'

const Remove: React.FC<IconCommonFillProps> = ({
  size = helper.DEFAULT_SIZE,
  color = helper.DEFAULT_COLOR,
  style = helper.ICON_DEFAULT_STYLE,
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      style={style}
      height={size}
      width={size}
      viewBox="0 0 24 24">
      <Path
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM5.525 4.464a.75.75 0 0 0-1.06 1.061L6.938 8l-2.475 2.475a.75.75 0 0 0 1.061 1.06L8 9.062l2.475 2.475a.75.75 0 0 0 1.06-1.061L9.062 8l2.475-2.475a.75.75 0 0 0-1.061-1.06L8 6.938z"
        fill={color}
        fill-rule="evenodd"
        fill-opacity=".65"
      />
    </Svg>
  )
}

export default memo(Remove)
