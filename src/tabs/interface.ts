import type { PropsWithChildren } from 'react'
import type { ColorValue } from 'react-native'

import type { TabBarProps, TabItem } from '../tab-bar/interface'

type UsedTabBarProps = TabBarProps<string>

export interface TabsProps
  extends Omit<
      UsedTabBarProps,
      | 'value'
      | 'defaultValue'
      | 'options'
      | 'onChange'
      | 'indicator'
      | 'divider'
      | 'safeAreaInsetBottom'
      | 'keyboardShowNotRender'
      | 'hidden'
      | 'style'
      | 'height'
      | 'backgroundColor'
    >,
    PropsWithChildren<{}> {
  /**
   * TabBar style
   */
  tabBarStyle?: UsedTabBarProps['style']

  /**
   * TabBar 高度
   */
  tabBarHeight?: UsedTabBarProps['height']

  /**
   * TabBar 背景色
   * @default bottom_bar_background_color
   */
  tabBarBackgroundColor?: UsedTabBarProps['backgroundColor']

  /**
   * 当前激活 tab 面板的 key
   */
  activeKey?: string

  /**
   * 初始化选中面板的 key，如果没有设置 activeKey
   */
  defaultActiveKey?: string

  /**
   * 切换面板的回调
   */
  onChange?: (activeKey: string) => void

  /**
   * 是否显示分割线
   * @default false
   */
  divider?: boolean

  /**
   * 自定义分割线颜色
   */
  dividerColor?: ColorValue
}

export interface TabPaneProps
  extends PropsWithChildren<Pick<TabItem<string>, 'badge'>> {
  /**
   * 对应 activeKey
   */
  key: string

  /**
   * 选项卡头显示文字
   */
  tab: string

  /**
   * 是否在激活时才渲染节点
   * @default true
   */
  lazyRender?: boolean
}

export interface TabViewProps extends PropsWithChildren<{}> {
  /**
   * 是否在激活时才渲染节点
   * @default true
   */
  lazyRender?: boolean

  /**
   * 是否激活
   */
  active?: boolean
}
