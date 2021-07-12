import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, StyleSheet } from 'react-native'

import type { RowProps } from './interface'
import RowContext from './context'
import Styles from './style'

/**
 * Row 布局
 * @description 一组单元格。
 */
const Row: React.FC<RowProps> = ({ children, gutter = 0, style }) => {
  const rowStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.row,
    {
      marginHorizontal: -(+gutter / 2),
    },
    style,
    // to test ui
    // {
    //   backgroundColor: '#666',
    // },
  ])

  // console.log(-(+gutter / 2));

  return (
    <RowContext.Provider value={{ gutter }}>
      <View style={rowStyleSummary}>{children}</View>
    </RowContext.Provider>
  )
}

export default memo<typeof Row>(Row)
