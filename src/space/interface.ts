import type { ViewProps, FlexStyle } from 'react-native'

import type { BlankProps } from '../blank/interface'

type SpaceDirection = 'vertical' | 'horizontal'

export interface SpaceProps extends ViewProps {
  /**
   * 间距方向 `'vertical' | 'horizontal'`
   * @default 'vertical'
   */
  direction?: SpaceDirection

  /**
   * 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean

  /**
   * 间距大小
   * @default 's'
   */
  gap?: number | BlankProps['size']

  /**
   * 垂直方向的间距大小
   * @default space_gap_vertical
   */
  gapVertical?: number

  /**
   * 水平方向的间距大小
   * @default space_gap_horizontal
   */
  gapHorizontal?: number

  /**
   * 头部是否添加间距
   * @default false
   */
  head?: boolean | number

  /**
   * 尾部是否添加间距
   * @default false
   */
  tail?: boolean | number

  /**
   * 主轴对齐方式
   */
  justify?: FlexStyle['justifyContent']

  /**
   * 交叉轴对齐方式
   */
  align?: FlexStyle['alignItems']
}
