import React, { memo } from 'react'
import { Svg, Path, G } from 'react-native-svg'
import * as helper from './helper'
import type { IconCommonFillProps } from './interface'

const Search: React.FC<IconCommonFillProps> = ({
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
      <G fill={color} fill-rule="nonzero">
        <Path d="M6.822 6.33a8.556 8.556 0 1 1 12.1 12.1 8.556 8.556 0 0 1-12.1-12.1zm1.06 1.06a7.056 7.056 0 1 0 9.979 9.979A7.056 7.056 0 0 0 7.883 7.39z" />
        <Path d="M18.391 17.899a.75.75 0 0 1 .984-.067l.077.067 3.038 3.038a.75.75 0 0 1-.984 1.128l-.076-.067-3.039-3.038a.75.75 0 0 1 0-1.061z" />
      </G>
    </Svg>
  )
}

export default memo(Search)
