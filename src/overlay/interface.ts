import type { ViewStyle, StyleProp } from 'react-native'

export interface OverlayProps {
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 是否展示遮罩层
   * @default false
   */
  show: boolean

  /**
   * z-index 层级
   * @default 1
   */
  zIndex?: number | string

  /**
   * 动画时长，单位毫秒
   * @default 300
   */
  duration?: number | string

  /**
   * 点击弹层
   */
  onPress?: () => void

  /**
   * 当点击返回按钮时触发
   * @support Android
   */
  onRequestClose?: () => boolean
}
