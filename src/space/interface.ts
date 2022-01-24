import { ViewProps, FlexStyle } from 'react-native'

type SpaceDirection = 'vertical' | 'horizontal'

// type SpaceSize = 'xl' | 'l' | 'm' | 's' | 'xs'

export interface SpaceProps extends ViewProps {
  /**
   * 间距方向
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
   * @default spacing_2
   */
  size?: number

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
