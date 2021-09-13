import type { StatusBarProps } from 'react-native'
// import type { NavBarProps } from 'components';

export interface PageProps {
  // style?: StyleProp<ViewStyle>;

  statusBarProps?: StatusBarProps

  /**
   * 状态栏文字颜色+页头文字颜色
   *
   * @default 'light-content'
   */
  barStyle?: StatusBarProps['barStyle']

  /**
   * 是否显示页头
   * @default true
   */
  headerShown?: boolean

  /**
   * 是否保留 statusBar 边距
   * @default true
   */
  statusBarShown?: boolean

  /**
   * 页头背景色+状态栏背景色
   */
  headerBackgroundColor?: string

  /**
   * 页面标题 headerProps 中的 title，会被后者覆盖
   */
  title?: string

  /**
   * header title text 文案颜色、返回按钮颜色
   */
  headerTintColor?: string
}

export interface FullPageProps
  extends Pick<PageProps, 'barStyle' | 'headerBackgroundColor'> {
  /**
   * 是否全屏，状态栏不保留边距
   * @default false
   */
  filled?: boolean
}
