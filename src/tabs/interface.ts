import type { TabBarProps } from '../tab-bar/interface'

export interface TabsProps
  extends Omit<
    TabBarProps,
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
  > {
  tabBarStyle?: TabBarProps['style']
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
}

export interface TabPaneProps {
  /**
   * 对应 activeKey
   */
  key: string

  /**
   * 选项卡头显示文字
   */
  tab: string
}
