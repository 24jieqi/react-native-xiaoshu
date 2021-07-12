import type { ViewStyle, StyleProp } from 'react-native'

export interface RowProps {
  /**
   * 自定义 row 样式，用于不同形式的布局
   */
  style?: StyleProp<ViewStyle>

  /**
   * 列元素之间的间距（单位为 px）
   */
  gutter?: number | string
  // justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

export interface RowContextState {
  gutter?: RowProps['gutter']
}

export interface ColProps {
  /**
   * 自定义 Cel 样式，用于不同形式的布局
   */
  style?: StyleProp<ViewStyle>

  /**
   * 列元素宽度 1~24
   */
  span: string | number

  /**
   * 列元素偏移距离 1 ~ (24 - span)
   */
  offset?: string | number
}
