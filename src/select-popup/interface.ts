import type React from 'react'
import type { PopupPropsCommon } from '../popup/interface'

export type SelectPopupKey = number | string

export type SelectPopupOption = {
  /**
   * 显示的文案
   */
  text: string

  /**
   * 唯一标识
   */
  key: SelectPopupKey
}

export interface SelectPopupProps
  extends Omit<PopupPropsCommon, 'closeOnPressOverlay'> {
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
  value?: SelectPopupKey[] | SelectPopupKey

  /**
   * 当前的选项
   */
  options: SelectPopupOption[]

  /**
   * 选择后的回调
   */
  onChange: (
    value: SelectPopupKey[] | SelectPopupKey,
    options: SelectPopupOption | SelectPopupOption[],
  ) => void
}

export interface SelectPopupMethodProps
  extends Omit<SelectPopupProps, 'visible'> {}

export interface SelectPopupOptions
  extends Omit<SelectPopupMethodProps, 'onChange'> {
  // 是否可以删了，函数的方式直接用 .then 操作
  onChange?: (
    value: SelectPopupKey[] | SelectPopupKey,
    options: SelectPopupOption | SelectPopupOption[],
  ) => void
}

export interface SelectPopupInstance {
  (p: SelectPopupOptions): Promise<SelectPopupKey[] | SelectPopupKey>
  Component: React.FC<SelectPopupProps>
}
