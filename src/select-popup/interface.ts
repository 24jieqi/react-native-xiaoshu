import type React from 'react'
import type { PopupPropsCommon } from '../popup/interface'

export type SelectPopupValue = number | string

export type SelectPopupOption = {
  /**
   * 显示的文案
   */
  label: string

  /**
   * 唯一标识
   */
  value: SelectPopupValue
}

export interface SelectPopupProps
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
  value?: SelectPopupValue[] | SelectPopupValue

  /**
   * 当前的选项
   */
  options: SelectPopupOption[]

  /**
   * 选择后的回调
   */
  onChange: (
    value: SelectPopupValue[] | SelectPopupValue,
    options: SelectPopupOption | SelectPopupOption[],
  ) => void
}

export interface SelectPopupMethodProps
  extends Omit<SelectPopupProps, 'visible'> {}

export interface SelectPopupOptions
  extends Omit<SelectPopupMethodProps, 'onChange'> {
  // 是否可以删了，函数的方式直接用 .then 操作
  onChange?: (
    value: SelectPopupValue[] | SelectPopupValue,
    options: SelectPopupOption | SelectPopupOption[],
  ) => void
}

export interface SelectPopupInstance {
  (p: SelectPopupOptions): Promise<SelectPopupValue[] | SelectPopupValue>
  Component: React.FC<SelectPopupProps>
}
