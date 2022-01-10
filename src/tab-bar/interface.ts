import React from 'react'

import { BottomBarProps } from '../bottom-bar/interface'

export type TabValue = number | string

type TabItem = {
  value: TabValue
  label: string
  iconRender: (color?: string, isActive?: boolean) => React.ReactElement
}

export interface TabBarProps extends BottomBarProps {
  /**
   * 激活的文案颜色
   */
  textColor?: string

  /**
   * 激活的图标颜色
   */
  iconColor?: string

  /**
   * 激活的文案颜色
   */
  activeTextColor?: string

  /**
   * 激活的图标颜色
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
}
