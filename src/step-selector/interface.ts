import type React from 'react'

import type { PopupPropsCommon } from '../popup/interface'

export type OptionData<T> = {
  value: T
  label: string
  index?: string
  [index: string]: any
}

export type RequestResponseData<T> = {
  placeholder?: string
  options: OptionData<T>[]
}

export interface StepSelectorProps<T> extends PopupPropsCommon {
  /**
   * 标题
   * @default '请选择'
   */
  title?: React.ReactNode

  /**
   * 顶部安全高度
   * @default safeAreaInsets.top
   */
  safeAreaInsetTop?: number

  value?: T[]

  defaultValue?: T[]

  onChange?: (v: T[], o: OptionData<T>[], isEnd?: boolean) => void

  /**
   * 点击关闭按钮
   */
  onPressClose?: () => void

  /**
   * 请求数据
   */
  request: (parentId: T, index: number) => Promise<RequestResponseData<T>>
}

export interface StepSelectorInstance {
  (p: any): Promise<{}>
  Component: <T>(p: StepSelectorProps<T>) => React.ReactElement
}
