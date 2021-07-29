import type { StatusBarProps, ViewStyle, StyleProp } from 'react-native'
import type { NavBarProps } from 'react-native-xiaoshu'

export interface PageProps {
  style?: StyleProp<ViewStyle>

  statusBarProps?: StatusBarProps

  /**
   * 状态栏文字颜色+页头文字颜色
   *
   * @default 'dark-content'
   */
  barStyle?: StatusBarProps['barStyle']

  /**
   * 是否显示页头
   * @default true
   */
  showHeader?: boolean

  /**
   * 页头背景色+状态栏背景色
   */
  headerBackgroundColor?: string

  /**
   * 页面标题 headerProps 中的 title，会被后者覆盖
   */
  title?: string

  /**
   * 点击返回 headerProps 中的 onPressLeftArrow，会被后者覆盖
   */
  onPressBack?: () => void

  headerProps?: NavBarProps
}

export interface FullPageProps {
  filled?: boolean
  statusBarStyle?: StatusBarProps['barStyle']
}
