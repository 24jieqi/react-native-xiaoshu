import type React from 'react'

import type { BottomBarProps } from '../bottom-bar/interface'

export type TabValue = number | string

type TabItem = {
  value: TabValue
  label: string
  iconRender?: (color?: string, isActive?: boolean) => React.ReactElement
}

export interface TabBarProps extends BottomBarProps {
  /**
   * 激活的文案颜色
   * @default tab_bar_text_color
   */
  textColor?: string

  /**
   * 激活的图标颜色
   * @default tab_bar_icon_color
   */
  iconColor?: string

  /**
   * 激活的文案颜色
   * @default tab_bar_active_text_color
   */
  activeTextColor?: string

  /**
   * 激活的图标颜色
   * @default tab_bar_active_icon_color
   */
  activeIconColor?: string

  /**
   * 当前选中的值
   */
  value?: TabValue

  /**
   * 默认数据
   */
  defaultValue?: TabValue

  /**
   * tab 数据
   */
  options: TabItem[]

  /**
   * 点击切换回调
   */
  onChange?: (value: TabValue) => void

  /**
   * 是否采用指示器模式
   * @default false
   */
  indicator?: boolean

  /**
   * 指示器宽
   * @description 0 表示撑满，其他数值标识固定，不填写与文字同宽
   */
  indicatorWidth?: number

  /**
   * 指示器高度
   * @description 设置为 0 就是不出现
   * @default 3
   */
  indicatorHeight?: number

  /**
   * 指示器颜色
   * @default tab_bar_indicator_color
   */
  indicatorColor?: string

  /**
   * 排列方式，left 标识自适应宽、有滚动条，center 标识居中、无滚动条
   * @default 'center'
   */
  tabAlign?: 'left' | 'center'
}
