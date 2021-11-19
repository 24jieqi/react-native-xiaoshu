import React, { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

import type { IconCommonFillProps } from './interface'
import * as helper from './helper'

interface IconWarnFillProps extends IconCommonFillProps {}

const IconWarnFill: React.FC<IconWarnFillProps> = ({
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
        d="M10.973 14.57c.172.516.511.86 1.027.86.516 0 .855-.344 1.027-.86l.688-9.425c0-1.032-.86-1.715-1.715-1.715-1.027 0-1.715.855-1.715 1.882zM12 17.145c-1.027 0-1.715.683-1.715 1.71 0 1.032.688 1.715 1.715 1.715 1.027 0 1.715-.683 1.715-1.715 0-1.027-.688-1.71-1.715-1.71zm0 0"
        fill={color}
        stroke={color}
        strokeWidth={0}
      />
    </Svg>
  )
}

export default memo(IconWarnFill)
