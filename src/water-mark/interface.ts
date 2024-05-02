import type { ColorValue, ViewProps } from 'react-native'

export interface WaterMarkProps extends ViewProps {
  /**
   * 文字内容
   */
  text: string

  /**
   * 文字颜色
   * @default water_mark_text_color
   */
  color?: ColorValue

  /**
   * 字体大小
   * @default water_mark_text_font_size
   */
  fontSize?: number

  /**
   * 文字透明度
   * @default water_mark_text_opacity
   */
  opacity?: number

  /**
   * 文字宽
   * @default 64
   */
  textWidth?: number

  /**
   * 文字高/行高
   * @default 64
   */
  textHeight?: number

  /**
   * 水印绘制时，旋转的角度，单位 °
   * @default -45
   */
  rotate?: number

  /**
   * 否需要前置水印
   * @default false
   */
  foreground?: boolean
}
