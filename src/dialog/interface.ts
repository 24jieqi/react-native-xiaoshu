import type { PropsWithChildren, ReactNode } from 'react'
import type {
  ColorValue,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedbackProps,
  DimensionValue,
} from 'react-native'

import type { NumberInputProps } from '../number-input/interface'
import type { PopupPropsCommon } from '../popup/interface'
import type { TextInputProps } from '../text-input/interface'

export type DialogType = 'alert' | 'confirm'

type messageAlign = 'center' | 'left' | 'right'

export type DialogAction = 'cancel' | 'confirm' | 'overlay'

interface DialogCommon extends PopupPropsCommon {
  style?: StyleProp<ViewStyle>

  /**
   * 标题
   */
  title?: ReactNode

  /**
   * 弹窗宽度
   * @default 300
   */
  width?: DimensionValue

  /**
   * 文本内容，支持通过\n换行
   */
  message?: ReactNode

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
  confirmButtonColor?: ColorValue

  /**
   * 确认按钮文案 粗体
   * @default true
   */
  confirmButtonTextBold?: boolean

  /**
   * 取消按钮文案
   * @default 取消
   */
  cancelButtonText?: string

  /**
   * 取消按钮颜色
   */
  cancelButtonColor?: ColorValue

  /**
   * 取消按钮文案 粗体
   * @default false
   */
  cancelButtonTextBold?: boolean

  /**
   * 是否显示关闭按钮
   * @default false
   */
  showClose?: boolean

  /**
   * 点击关闭按钮
   */
  onPressClose?: TouchableWithoutFeedbackProps['onPress']

  /**
   * 按钮翻转顺序
   * @default false
   */
  buttonReverse?: boolean
}

export interface DialogProps extends DialogCommon, PropsWithChildren<{}> {
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
  extends Omit<DialogCommon, 'visible' | 'onPressOverlay' | 'onPressClose'> {
  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: DialogAction) => boolean | Promise<boolean>

  /**
   * 操作完成后的回调
   */
  onResponse?: (action: DialogAction) => void
}

export interface DialogOptions
  extends Omit<DialogMethodProps, 'onResponse' | 'onRequestClose'> {}

export interface DialogKeyboardProps extends DialogProps {
  safeAreaTop?: number
}

export type DialogInputState = {
  value: string | number
} & DialogMethodState

export interface DialogInputProps
  extends Omit<
      DialogCommon,
      'visible' | 'onPressOverlay' | 'messageAlign' | 'onPressClose'
    >,
    Pick<DialogKeyboardProps, 'safeAreaTop'> {
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
  onPressCancel?: (
    text: string,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ) => boolean | Promise<boolean> | void | Promise<void>

  /**
   * 点击确定
   */
  onPressConfirm?: (
    text: string,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ) => boolean | Promise<boolean> | void | Promise<void>

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
   * @default 'text'
   */
  type?: TextInputProps['type'] | NumberInputProps['type']

  /**
   * @default true
   */
  autoFocus?: boolean

  /**
   * 自定义 TextInput 属性
   */
  textInput?: Omit<
    TextInputProps,
    'defaultValue' | 'placeholder' | 'type' | 'autoFocus'
  >

  /**
   * 自定义 NumberInput 属性
   */
  numberInput?: Omit<
    NumberInputProps,
    'defaultValue' | 'placeholder' | 'type' | 'autoFocus'
  >
}

export interface DialogInputOptions extends DialogInputProps {}
