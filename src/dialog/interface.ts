import type * as React from 'react'

import type { PopupPropsCommon } from '../popup/interface'
import type { TextInputProps } from '../text-input/interface'

export type DialogType = 'alert' | 'confirm'

type messageAlign = 'center' | 'left' | 'right'

export type DialogAction = 'cancel' | 'confirm' | 'overlay'

interface DialogCommon extends PopupPropsCommon {
  /**
   * 标题
   */
  title?: React.ReactNode

  /**
   * 弹窗宽度
   * @default 300
   */
  width?: number | string

  /**
   * 文本内容，支持通过\n换行
   */
  message?: React.ReactNode

  /**
   * 内容对齐方式，可选值为`'center' | 'left' | 'right'`
   * @default center
   */
  messageAlign?: messageAlign

  /**
   * 是否展示确认按钮
   * @default true
   */
  showConfirmButton?: boolean

  /**
   * 是否展示取消按钮
   * @default false
   */
  showCancelButton?: boolean

  /**
   * 确认按钮文案
   * @default 确认
   */
  confirmButtonText?: string

  /**
   * 确认按钮颜色
   */
  confirmButtonColor?: string

  /**
   * 取消按钮文案
   * @default 取消
   */
  cancelButtonText?: string

  /**
   * 取消按钮颜色
   */
  cancelButtonColor?: string
}

export interface DialogProps extends DialogCommon {
  /**
   * 取消按钮加载中
   * @default false
   */
  cancelButtonLoading?: boolean

  /**
   * 确定按钮加载中
   * @default false
   */
  confirmButtonLoading?: boolean

  /**
   * 点击取消
   */
  onPressCancel?: () => void

  /**
   * 点击确定
   */
  onPressConfirm?: () => void
}

/** 对话框函数使用时的组件内部状态 */
export type DialogMethodState = {
  visible: boolean
  cancel: boolean
  confirm: boolean
  overlay: boolean
}

/** 对话框函数使用时的组件需要的属性 */
export interface DialogMethodProps
  extends Omit<DialogCommon, 'visible' | 'onPressOverlay'> {
  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: DialogAction) => boolean | Promise<boolean>

  /**
   * 操作完成后的回调
   */
  callback?: (action: DialogAction) => void
}

export interface DialogOptions extends Omit<DialogMethodProps, 'callback'> {}

export type DialogInputState = {
  value: string
} & DialogMethodState

export interface DialogInputProps
  extends Omit<DialogCommon, 'visible' | 'onPressOverlay' | 'messageAlign'> {
  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (
    action: Exclude<DialogAction, 'overlay'>,
    text: string,
  ) => boolean | Promise<boolean>

  /**
   * 点击取消
   */
  onPressCancel?: (text: string) => boolean | Promise<boolean>

  /**
   * 点击确定
   */
  onPressConfirm?: (text: string) => boolean | Promise<boolean>

  /**
   * 默认值
   */
  defaultValue?: string

  /**
   * 提示文案
   */
  placeholder?: string

  /**
   * 输入框类型
   */
  type?: TextInputProps['type']

  textInput?: Omit<TextInputProps, 'defaultValue' | 'placeholder' | 'type'>
}

export interface DialogInputOptions extends DialogInputProps {}

export interface DialogInstance {
  (p: DialogOptions): Promise<DialogAction>
  Component: React.FC<DialogProps>
  confirm: (p: DialogOptions) => Promise<DialogAction>
  input: (p: DialogInputOptions) => void
  // clear(all: boolean | number): void;
  // setDefaultOptions(
  //   type: DialogType | DialogProps,
  //   options?: DialogProps,
  // ): void;
  // resetDefaultOptions(type: DialogType | DialogProps): void;
}

export type State = {
  visible: boolean
  overlayVisible: boolean
  zIndex: number
}
