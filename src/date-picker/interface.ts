import type {
  DatePickerViewProps,
  DatePickerColumnMode,
} from '../date-picker-view/interface'
import type { PopupPropsCommon } from '../popup/interface'

export type DatePickerAction = 'cancel' | 'confirm' | 'overlay'

export type DatePickerRangeAction = 'cancel' | 'confirm' | 'overlay' | 'clear'

export type DatePickerRangeValue = [Date | null, Date | null]

export interface DatePickerSingleMethodProps
  extends Omit<DatePickerViewProps, 'value' | 'onChange' | 'loading'>,
    Omit<PopupPropsCommon, 'onPressOverlay' | 'visible' | 'onRequestClose'> {
  /**
   * 顶部标题
   */
  title?: React.ReactNode

  /**
   * 确认按钮文字
   * @default '确认'
   */
  confirmButtonText?: string

  /**
   * 取消按钮文字
   * @default '取消'
   */
  cancelButtonText?: string

  /**
   * 点击取消
   */
  onCancel?: (value: Date) => void

  /**
   * 点击确定
   */
  onConfirm?: (value: Date) => void

  /**
   * 点击遮罩层
   */
  onPressOverlay?: (value: Date) => void

  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (
    action: DatePickerAction,
    value: Date,
  ) => boolean | Promise<boolean>
}

export interface DatePickerRangeViewProps
  extends Omit<
    DatePickerViewProps,
    'value' | 'defaultValue' | 'onChange' | 'mode'
  > {
  /**
   * 日期选择的类型
   * @default 'Y-D'
   */
  mode?: DatePickerColumnMode

  /**
   * 默认时间组
   */
  defaultValue?: DatePickerRangeValue

  /**
   * 选中时间组
   */
  value?: DatePickerRangeValue

  /**
   * 初始值，只有初始化以及重置时生效
   * @default [null, null]
   */
  initialValue?: DatePickerRangeValue

  /**
   * 确认按钮文字
   * @default '确认'
   */
  confirmButtonText?: string

  /**
   * 重置按钮文字
   * @default '重置'
   */
  resetButtonText?: string

  /**
   * 占位文案
   * @default ['请选择', '请选择']
   */
  placeholder?: [string, string]

  /**
   * 点击确定
   */
  onConfirm?: (values: DatePickerRangeValue) => void

  /**
   * 变化时的回调函数
   */
  onChange?: (values: DatePickerRangeValue) => void

  /**
   * 显示清空按钮
   * @default false
   */
  clearable?: boolean

  /**
   * 点击清空按钮
   */
  onClear?: (values: DatePickerRangeValue) => void

  /**
   * 清空按钮文字
   * @default '清空'
   */
  clearButtonText?: string
}

export interface DatePickerRangeMethodProps
  extends Omit<
      DatePickerRangeViewProps,
      'loading' | 'value' | 'onChange' | 'onConfirm'
    >,
    Omit<PopupPropsCommon, 'visible' | 'onPressOverlay' | 'onRequestClose'> {
  /**
   * 顶部标题
   */
  title?: React.ReactNode

  /**
   * 点击取消
   */
  onCancel?: (values: DatePickerRangeValue) => void

  /**
   * 点击确定
   */
  onConfirm?: (values: DatePickerRangeValue) => void

  /**
   * 点击遮罩层
   */
  onPressOverlay?: (values: DatePickerRangeValue) => void

  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (
    action: DatePickerRangeAction,
    value: DatePickerRangeValue,
  ) => boolean | Promise<boolean>
}

export interface DatePickerInstance {
  (p: DatePickerSingleMethodProps): Promise<{
    action: DatePickerAction
    value: Date
  }>
  range: (p: DatePickerRangeMethodProps) => Promise<{
    action: DatePickerRangeAction
    values: DatePickerRangeValue
  }>
  RangeView: React.FC<DatePickerRangeViewProps>
}
