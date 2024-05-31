import type { TextStyle, StyleProp, ColorValue, ViewProps } from 'react-native'

import type { DividerTheme } from './style'

type DividerDirection = 'vertical' | 'horizontal'

export interface DividerProps extends ViewProps {
  theme?: Partial<DividerTheme>
  /**
   * 文字样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 颜色模式
   * @default 'light'
   */
  type?: 'dark' | 'light'

  /**
   * 间距方向 `'vertical' | 'horizontal'`，vertical 只有线无文案
   * @default 'horizontal'
   */
  direction?: DividerDirection

  /**
   * 是否使用虚线
   */
  dashed?: boolean

  /**
   * 自定义颜色
   */
  color?: ColorValue

  /**
   * 内容位置，可选值为 `'left' | 'center' | 'right'`
   *
   * @default 'center'
   */
  contentPosition?: 'left' | 'center' | 'right'
}

export interface DividerLineProps
  extends Required<Pick<DividerProps, 'color'>> {
  theme?: Partial<DividerTheme>
  /**
   * 所处位置
   */
  position: 'left' | 'center' | 'right'

  /**
   * 是否自适应 占满剩余控件
   * @default true
   */
  adaptive?: boolean

  /**
   * 间距方向 `'vertical' | 'horizontal'`，vertical 只有线无文案
   * @default 'horizontal'
   */
  direction?: DividerDirection
}
