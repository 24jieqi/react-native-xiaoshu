import React, { useMemo, memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View } from 'react-native'

import type { RowProps } from './interface'
import RowContext from './context'
import STYLES from './style'

/**
 * Row 布局
 * @description 一组单元格。
 */
const Row: React.FC<RowProps> = ({
  gutter = 0,
  style,
  justify,
  align,
  ...restProps
}) => {
  const ctx = useMemo(() => ({ gutter }), [gutter])
  const rowStyles: StyleProp<ViewStyle> = [
    STYLES.row,
    {
      marginHorizontal: -(+gutter / 2),
      justifyContent: justify,
      alignItems: align,
    },
    style,
    // to test ui
    // {
    //   backgroundColor: '#666',
    // },
  ]

  // console.log(-(+gutter / 2));

  return (
    <RowContext.Provider value={ctx}>
      <View {...restProps} style={rowStyles} />
    </RowContext.Provider>
  )
}

export default memo<typeof Row>(Row)
