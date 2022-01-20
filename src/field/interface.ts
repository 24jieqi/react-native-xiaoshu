import type { StyleProp, TextStyle, ViewStyle } from 'react-native'
import type { CellProps, CellPrivateProps } from '../cell/interface'
import type { SelectorProps } from '../selector/interface'
import type { TextInputProps } from '../text-input/interface'
import type { NumberInputProps } from '../number-input/interface'

export interface FieldTextProps extends Omit<CellProps, 'value'> {
  /**
   * 没有值时提示文案
   */
  placeholder?: string

  /**
   * 占位字符串显示的文字颜色
   * @default 'text_input_placeholder_text_color'
   */
  placeholderTextColor?: string

  /**
   * 显示的文案
   */
  value?: string | number
}

export interface CellPropsUsed extends Omit<CellPrivateProps, 'value'> {
  style?: StyleProp<ViewStyle>
}

interface SelectorPropsUsed
  extends Pick<SelectorProps, 'value' | 'multiple' | 'options' | 'onChange'> {}

export interface FieldSelectorProps extends CellPropsUsed, SelectorPropsUsed {
  /**
   * 没有值时提示文案
   */
  placeholder?: string

  /**
   * 占位字符串显示的文字颜色。
   */
  placeholderTextColor?: string

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
}

export interface FieldTextCellPropsUsed
  extends Omit<
    CellPropsUsed,
    'textAlign' | 'valueTextStyle' | 'valueTextNumberOfLines'
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
