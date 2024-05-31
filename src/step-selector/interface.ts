import type React from 'react'

import type { PopupPropsCommon } from '../popup/interface'

import type { StepSelector } from './style'

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
  theme?: Partial<StepSelector>
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

  /**
   * 自定义 loading
   */
  loading?: React.ReactElement | null
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
    'value' | 'onChange' | 'onPressClose' | 'visible' | 'onRequestClose'
  > {
  /**
   * 当选择到最末端时触发，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (
    v: T[],
    o: OptionData<T>[],
    isEnd?: boolean,
  ) => boolean | Promise<boolean>

  /**
   * 类似确定的回调，当选择到最末端时触发，部分业务需要把选项其他值提取出来
   */
  onConfirm?: (v: T[], o: OptionData<T>[], isEnd?: boolean) => void

  /**
   * 点击取消
   */
  onCancel?: () => void
}

export interface StepSelectorInstance {
  <T>(p: StepSelectorMethodProps<T>): Promise<T[]>
  Component: <T>(p: StepSelectorProps<T>) => React.ReactElement
}
