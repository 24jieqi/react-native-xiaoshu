import React, { memo } from 'react'
import { Svg, Path } from 'react-native-svg'
import * as defaultVar from '../theme/default-var'
import * as helper from './helper'
import type { IconCommonFillProps } from './interface'

const IconDeleteFill: React.FC<IconCommonFillProps> = ({
  size = helper.SMALL_SIZE,
  color = defaultVar.error,
  style = helper.ICON_DEFAULT_STYLE,
  hitSlop = helper.SMALL_HIT_SLOP,
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      style={style}
      height={size}
      width={size}
      hitSlop={hitSlop}
      viewBox="0 0 16 16">
      <Path
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm4.25 7h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 1 0 0-1.5z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default memo(IconDeleteFill)
