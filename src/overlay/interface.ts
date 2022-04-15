import type { ViewStyle, StyleProp, ColorValue } from 'react-native'

export interface OverlayProps {
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 是否展示遮罩层
   * @default false
   */
  visible: boolean

  /**
   * z-index 层级
   * @default 1
   */
  zIndex?: number

  /**
   * 动画时长，单位毫秒，默认值 300
   * @default animation_duration_base
   */
  duration?: number

  /**
   * 点击弹层
   */
  onPress?: () => void

  /**
   * 当点击返回按钮时触发
   * @support Android
   */
  onRequestClose?: () => boolean

  /**
   * 自定义遮罩层颜色
   * @default overlay_background_color
   */
  backgroundColor?: ColorValue
}
