import type { ReactNode } from 'react'
import type {
  ColorValue,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native'

import type { ButtonOptionGroupProps } from '../button/interface'
import type { CellProps, CellPrivateProps } from '../cell/interface'
import type { CheckboxGroupProps } from '../checkbox/interface'
import type {
  DatePickerSingleMethodProps,
  DatePickerRangeMethodProps,
  DatePickerRangeValue,
} from '../date-picker/interface'
import type { FixHitSlopProps } from '../helpers/types'
import type { NumberInputProps } from '../number-input/interface'
import type { PasswordInputProps } from '../password-input/interface'
import type { SelectorProps } from '../selector/interface'
import type { SwitchProps } from '../switch/interface'
import type { TextInputProps } from '../text-input/interface'

export interface FieldTextProps extends Omit<CellProps, 'value'> {
  /**
   * 没有值时提示文案
   */
  placeholder?: string

  /**
   * 占位字符串显示的文字颜色
   * @default text_input_placeholder_text_color
   */
  placeholderTextColor?: ColorValue

  /**
   * 显示的文案
   */
  value?: string | number | ReactNode
}

export interface CellPropsUsed
  extends Omit<CellPrivateProps, 'value'>,
    Pick<ViewProps, 'testID'> {
  style?: StyleProp<ViewStyle>
}

interface SelectorPropsUsed
  extends Pick<
    SelectorProps,
    'value' | 'multiple' | 'options' | 'onChange' | 'search'
  > {}

export interface FieldSelectorProps extends CellPropsUsed, SelectorPropsUsed {
  /**
   * 没有值时提示文案
   */
  placeholder?: string

  /**
   * 占位字符串显示的文字颜色。
   */
  placeholderTextColor?: ColorValue

  /**
   * 候选项是否在加载中
   * @default false
   */
  optionsLoading?: boolean

  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean

  /**
   * 是否启用清除图标，且箭头会消失，点击清除图标后会清空 value
   * @default false
   */
  clearable?: boolean

  /**
   * 选择器标题
   * @default '请选择'
   */
  selectorTitle?: string

  /**
   * 自定义渲染选择后的结果文案
   */
  renderResultText?: (
    value: SelectorPropsUsed['value'],
    options: SelectorPropsUsed['options'],
  ) => ReactNode
}

export interface FieldTextCellPropsUsed
  extends Omit<
    CellPropsUsed,
    | 'textAlign'
    | 'valueTextStyle'
    | 'valueTextNumberOfLines'
    | 'onPressDebounceWait'
  > {}

export interface FieldTextInputProps
  extends Omit<TextInputProps, 'style' | 'bordered' | 'size'>,
    FieldTextCellPropsUsed {
  /**
   * 自定义输入框的样式
   */
  textInputStyle?: StyleProp<TextStyle>

  /**
   * 是否显示输入框border
   */
  textInputBordered?: boolean
}

export interface FieldNumberInputProps
  extends Omit<NumberInputProps, 'style' | 'bordered' | 'size'>,
    FieldTextCellPropsUsed {
  /**
   * 自定义输入框的样式
   */
  textInputStyle?: StyleProp<TextStyle>

  /**
   * 是否显示输入框border
   */
  textInputBordered?: boolean
}

export interface FieldSwitchCellPropsUsed
  extends Omit<
    CellPropsUsed,
    'textAlign' | 'valueTextStyle' | 'valueTextNumberOfLines'
  > {}

export interface FieldSwitchProps<ActiveValueT = any, InactiveValueT = any>
  extends SwitchProps<ActiveValueT, InactiveValueT>,
    FieldSwitchCellPropsUsed {}

export interface FieldDateProps
  extends Omit<FieldTextProps, 'value' | 'onPress' | 'isLink' | 'disabled'>,
    Pick<
      DatePickerSingleMethodProps,
      | 'mode'
      | 'min'
      | 'max'
      | 'renderLabel'
      | 'confirmButtonText'
      | 'cancelButtonText'
    > {
  defaultValue?: Date

  value?: Date

  onChange?: (v: Date) => void

  /**
   * 自定义格式化文案
   */
  formatValueText?: (
    v: Date,
    mode: DatePickerSingleMethodProps['mode'],
    str: string,
  ) => string

  /**
   * 时间选择器顶部标题
   */
  datePickerTitle?: string

  /**
   * 自定义时间选择器配置
   */
  datePickerCustomOption?: (
    option: Pick<
      DatePickerSingleMethodProps,
      | 'defaultValue'
      | 'confirmButtonText'
      | 'cancelButtonText'
      | 'mode'
      | 'min'
      | 'max'
      | 'renderLabel'
      | 'title'
    >,
  ) => Omit<DatePickerSingleMethodProps, 'onCancel' | 'onConfirm'>

  /**
   * @default true
   */
  isLink?: boolean

  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean

  /**
   * 是否启用清除图标，且箭头会消失，点击清除图标后会清空 value
   * @default false
   */
  clearable?: boolean
}

export interface FieldDateRangeProps
  extends Omit<CellProps, 'value' | 'isLink' | 'disabled'>,
    Pick<
      DatePickerRangeMethodProps,
      | 'mode'
      | 'min'
      | 'max'
      | 'renderLabel'
      | 'confirmButtonText'
      | 'resetButtonText'
    > {
  defaultValue?: DatePickerRangeValue

  value?: DatePickerRangeValue

  onChange?: (v: DatePickerRangeValue) => void

  /**
   * 自定义格式化文案
   */
  formatValueText?: (
    v: DatePickerRangeValue,
    mode: DatePickerSingleMethodProps['mode'],
    str: [string, string],
  ) => [string, string]

  /**
   * 时间选择器顶部标题
   */
  datePickerTitle?: string

  /**
   * 时间选择器关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  dataPickerBeforeClose?: DatePickerRangeMethodProps['beforeClose']

  /**
   * 自定义时间选择器配置
   */
  datePickerCustomOption?: (
    option: Pick<
      DatePickerRangeMethodProps,
      | 'defaultValue'
      | 'confirmButtonText'
      | 'resetButtonText'
      | 'mode'
      | 'min'
      | 'max'
      | 'renderLabel'
      | 'title'
      | 'beforeClose'
    >,
  ) => Omit<DatePickerRangeMethodProps, 'onCancel' | 'onConfirm'>

  /**
   * 没有值时提示文案
   */
  placeholder?: [string, string]

  /**
   * 占位字符串显示的文字颜色
   * @default text_input_placeholder_text_color
   */
  placeholderTextColor?: ColorValue

  /**
   * @default true
   */
  isLink?: boolean

  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean

  /**
   * 是否启用清除图标，且箭头会消失，点击清除图标后会清空 value
   * @default false
   */
  clearable?: boolean
}

export interface FieldCheckboxProps
  extends FixHitSlopProps<
      Omit<CellProps, 'value' | 'isLink' | 'center' | 'textAlign'>
    >,
    Pick<
      CheckboxGroupProps<any>,
      | 'value'
      | 'defaultValue'
      | 'options'
      | 'onChange'
      | 'multiple'
      | 'editable'
      | 'scrollable'
      | 'checkboxLabelTextStyle'
      | 'checkboxIconLabelGap'
      | 'activeColor'
      | 'iconSize'
      | 'deselect'
    > {}

export interface FieldPasswordInputProps
  extends Omit<PasswordInputProps, 'style' | 'bordered' | 'size'>,
    FieldTextCellPropsUsed {
  /**
   * 自定义输入框的样式
   */
  textInputStyle?: StyleProp<TextStyle>

  /**
   * 是否显示输入框border
   */
  textInputBordered?: boolean
}

export interface FieldButtonOptionProps
  extends FixHitSlopProps<
      Omit<CellProps, 'value' | 'isLink' | 'center' | 'textAlign'>
    >,
    Pick<
      ButtonOptionGroupProps<any>,
      | 'value'
      | 'defaultValue'
      | 'options'
      | 'onChange'
      | 'multiple'
      | 'editable'
      | 'type'
      | 'deselect'
    > {}
