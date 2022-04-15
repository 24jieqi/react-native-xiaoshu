import type { ColorValue } from 'react-native'
import type { SvgProps } from 'react-native-svg'

export interface IconCommonProps extends SvgProps {
  /**
   * 图标大小
   * @default 24
   */
  size?: number

  /**
   * 图片颜色
   * @default icon_color
   */
  color?: ColorValue

  /**
   * svg 内部的样式
   */
  svgStyle?: SvgProps['style']
}
