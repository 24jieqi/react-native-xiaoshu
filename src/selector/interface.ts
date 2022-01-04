import type React from 'react'
import type { PopupPropsCommon } from '../popup/interface'

export type SelectorValue = number | string

export type SelectorOption = {
  /**
   * 显示的文案
   */
  label: string

  /**
   * 唯一标识
   */
  value: SelectorValue

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
}

export interface SelectorProps
  extends Omit<PopupPropsCommon, 'closeOnPressOverlay' | 'onPressOverlay'> {
  /**
   * 点击遮罩层关闭
   * @default true
   */
  closeOnPressOverlay?: boolean

  /**
   * 标题
   */
  title: React.ReactNode

  /**
   * 是否显示关闭图标
   * @default true
   */
  showClose?: boolean

  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean

  /**
   * 当前选中的值
   */
  value?: SelectorValue[] | SelectorValue

  /**
   * 当前的选项
   */
  options: SelectorOption[]

  /**
   * 选择后的回调
   */
  onChange: (
    value: SelectorValue[] | SelectorValue,
    options: SelectorOption | SelectorOption[],
  ) => void

  /**
   * 当值变化的时候立即响应
   */
  onChangeImmediate?: (
    v: SelectorValue[] | SelectorValue,
  ) => SelectorValue[] | SelectorValue

  /**
   * 顶部安全高度
   * @default safeAreaInsets.top
   */
  safeAreaInsetTop?: number
}

export interface SelectorMethodProps extends Omit<SelectorProps, 'visible'> {}

export interface SelectorOptions extends Omit<SelectorMethodProps, 'onChange'> {
  // 是否可以删了，函数的方式直接用 .then 操作
  onChange?: (
    value: SelectorValue[] | SelectorValue,
    options: SelectorOption | SelectorOption[],
  ) => void
}

export interface SelectorInstance {
  (p: SelectorOptions): Promise<SelectorValue[] | SelectorValue>
  Component: React.FC<SelectorProps>
}
