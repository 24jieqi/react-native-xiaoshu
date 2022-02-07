import type { ViewProps, FlexStyle } from 'react-native'

export interface RowProps extends ViewProps {
  /**
   * 列元素之间的间距
   */
  gutter?: number

  /**
   * 主轴对齐方式
   */
  justify?: FlexStyle['justifyContent']

  /**
   * 交叉轴对齐方式
   */
  align?: FlexStyle['alignItems']
}

export interface RowContextState {
  gutter?: RowProps['gutter']
}

export interface ColProps extends ViewProps {
  /**
   * 列元素宽度 1~24
   */
  span: number

  /**
   * 列元素偏移距离 1 ~ (24 - span)
   * @default 0
   */
  offset?: number
}
