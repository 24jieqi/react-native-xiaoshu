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

  /**
   * 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean

  /**
   * 是否显示圆角
   * @default true
   */
  round?: boolean

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

export interface StepSelectorLineProps {
  /**
   * 当前的索引
   */
  index: number

  /**
   * 总数量
   */
  total: number

  /**
   * 是否是激活的样子
   * @default false
   */
  active?: boolean
}

export interface StepSelectorMethodProps<T>
  extends Omit<
    StepSelectorProps<T>,
    'value' | 'onChange' | 'onPressClose' | 'visible'
  > {
  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (
    v: T[],
    o: OptionData<T>[],
    isEnd?: boolean,
  ) => boolean | Promise<boolean>

  /**
   * 操作完成后的回调，部分业务需要把选项其他值提取出来
   */
  callback?: (v: T[], o: OptionData<T>[], isEnd?: boolean) => void
}

export interface StepSelectorInstance {
  <T>(p: StepSelectorMethodProps<T>): Promise<T[]>
  Component: <T>(p: StepSelectorProps<T>) => React.ReactElement
}
