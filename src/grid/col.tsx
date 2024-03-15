import React, { memo } from 'react'
import type { ViewStyle, StyleProp, DimensionValue } from 'react-native'
import { View } from 'react-native'

import { useRow } from './context'
import type { ColProps } from './interface'

const BASE_SPAN_WIDTH = 100 / 24

/**
 * Col 布局
 * @description 每个子单元格。
 */
const Col: React.FC<ColProps> = ({ style, span, offset = 0, ...restProps }) => {
  const { gap = 0 } = useRow()
  const width: DimensionValue = `${+span * BASE_SPAN_WIDTH}%`
  const left: DimensionValue = `${+offset * BASE_SPAN_WIDTH}%`

  const colStyles: StyleProp<ViewStyle> = [
    {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      paddingHorizontal: +gap / 2,
      marginLeft: left,
    },
    style,
    // to test ui
    // {
    //   backgroundColor: '#000',
    // },
  ]

  return <View {...restProps} style={colStyles} />
}

export default memo(Col)
