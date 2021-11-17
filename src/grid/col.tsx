import React, { memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View } from 'react-native'

import type { ColProps } from './interface'
import { useRow } from './context'

const BASE_SPAN_WIDTH = 100 / 24

/**
 * Col 布局
 * @description 每个子单元格。
 */
const Col: React.FC<ColProps> = ({ children, style, span, offset = 0 }) => {
  const { gutter = 0 } = useRow()
  const width = `${+span * BASE_SPAN_WIDTH}%`
  const left = `${+offset * BASE_SPAN_WIDTH}%`

  const colStyles: StyleProp<ViewStyle> = [
    {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      paddingHorizontal: +gutter / 2,
      marginLeft: left,
    },
    style,
    // to test ui
    // {
    //   backgroundColor: '#000',
    // },
  ]

  return <View style={colStyles}>{children}</View>
}

export default memo<typeof Col>(Col)
