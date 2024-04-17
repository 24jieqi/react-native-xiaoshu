import type React from 'react'
import type {
  ViewStyle,
  TextStyle,
  StyleProp,
  ColorValue,
  TouchableWithoutFeedbackProps,
} from 'react-native'

import type { PopupPropsCommon } from '../popup/interface'

import type { NotifyTheme } from './style'

export type NotifyType = 'primary' | 'success' | 'error' | 'warning'

export type NotifyMethods = {
  close: () => void
  setMessage: (s: React.ReactNode) => void
}

export interface NotifyProps
  extends Omit<
    PopupPropsCommon,
    'overlay' | 'closeOnClickOverlay' | 'onPressOverlay' | 'duration'
  > {
  theme?: Partial<NotifyTheme>
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 文字样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 类型，可选值为 `'primary' | 'success' | 'error' | 'warning'`
   *
   * @default 'primary'
   */
  type?: NotifyType

  /**
   * 展示文案
   */
  message?: React.ReactNode

  /**
   * 字体颜色
   */
  color?: ColorValue

  /**
   * 背景颜色
   */
  backgroundColor?: ColorValue

  /**
   * 点击时的回调函数
   */
  onPress?: TouchableWithoutFeedbackProps['onPress']
}

export interface NotifyOptions extends Omit<NotifyProps, 'visible'> {
  /**
   * 展示时长(ms)，值为 0 时，notify 不会消失
   * @default 3000
   */
  duration?: number
}

export interface NotifyMethodProps extends NotifyOptions {}
