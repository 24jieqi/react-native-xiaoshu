import type React from 'react'
import type {
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native'

export interface TextInputProps extends RNTextInputProps {
  /**
   * 当设置 addonXxx 的时候就会出现一个组
   */
  addonGroupStyle?: StyleProp<ViewStyle>

  /**
   * addonBefore 文案的样式
   */
  addonBeforeTextStyle?: StyleProp<TextStyle>

  /**
   * addonAfter 文案的样式
   */
  addonAfterTextStyle?: StyleProp<TextStyle>

  /**
   * xxxfix 相关父组件样式
   */
  fixGroupStyles?: StyleProp<ViewStyle>

  /**
   * prefix 文案的样式
   */
  prefixTextStyle?: StyleProp<TextStyle>

  /**
   * suffix 文案的样式
   */
  suffixTextStyle?: StyleProp<TextStyle>

  /**
   * 输入内容格式
   * @description digit 整数
   * @description number 允许小数
   * @default 'text'
   */
  type?: 'text' | 'digit' | 'number' | 'textarea' | 'password'

  /**
   * 多行的时候最低多少行的高度
   * @default 2
   */
  rows?: number

  /**
   * 是否启用清除图标，点击清除图标后会清空输入框
   * @example 如果点击不触发，需要在 ScrollView 组件上添加 keyboardShouldPersistTaps="handled"
   * @default false
   */
  clearable?: boolean

  /**
   * 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: 'always' | 'focus'

  /**
   * 输入内容格式化函数
   */
  formatter?: (s: string) => string

  /**
   * 格式化函数触发的时机，可选值为 onEndEditing | onChangeText
   * @default `onChangeText`
   */
  formatTrigger?: 'onEndEditing' | 'onChangeText'

  /**
   * 是否显示字数统计，需要设置 maxLength 属性，只有 textarea 模式下才有效
   * @default false
   */
  showWordLimit?: boolean

  /**
   * 是否显示边框
   * @default false
   */
  bordered?: boolean

  /**
   * 输入框外部前置标签，边框外，textarea 无
   */
  addonBefore?: React.ReactNode

  /**
   * 输入框外部后置标签，边框外，textarea 无
   */
  addonAfter?: React.ReactNode

  /**
   * 输入框内部前缀，边框内部，textarea 无
   */
  prefix?: React.ReactNode

  /**
   * 输入框内部后缀，边框内部，textarea 无
   */
  suffix?: React.ReactNode

  /**
   * 输入框自定义宽
   */
  inputWidth?: number
}
