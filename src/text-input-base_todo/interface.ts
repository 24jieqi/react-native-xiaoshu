export type TODO = '暂时不实现'

// import type React from 'react'
// import type {
//   TextInputProps,
//   ViewStyle,
//   TextStyle,
//   StyleProp,
// } from 'react-native'

// export interface TextInputBaseProps extends TextInputProps {
//   /**
//    * xxxfix 相关父组件样式
//    */
//   fixGroupStyle?: StyleProp<ViewStyle>

//   /**
//    * prefix 文案的样式
//    */
//   prefixTextStyle?: StyleProp<TextStyle>

//   /**
//    * suffix 文案的样式
//    */
//   suffixTextStyle?: StyleProp<TextStyle>

//   /**
//    * 是否启用清除图标，点击清除图标后会清空输入框
//    * @example 如果点击不触发，需要在 ScrollView 组件上添加 keyboardShouldPersistTaps="handled"
//    * @default false
//    */
//   clearable?: boolean

//   /**
//    * 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
//    * @default 'focus'
//    */
//   clearTrigger?: 'always' | 'focus'

//   /**
//    * 输入内容格式化函数
//    */
//   formatter?: (s: string) => string

//   /**
//    * 格式化函数触发的时机，可选值为 onEndEditing | onChangeText
//    * @default `onChangeText`
//    */
//   formatTrigger?: 'onEndEditing' | 'onChangeText'

//   /**
//    * 输入框内部前缀，边框内部，textarea 无
//    */
//   prefix?: React.ReactNode

//   /**
//    * 输入框内部后缀，边框内部，textarea 无
//    */
//   suffix?: React.ReactNode

//   /**
//    * 控件大小。
//    * @default 'middle'
//    */
//   size?: 'large' | 'middle' | 'small'

//   /**
//    * 是否显示边框
//    * @default false
//    */
//   bordered?: boolean

//   /**
//    * textInput 高度，Android、iOS 两端的高度不能单纯通过 height 解决
//    */
//   textInputHeight?: number
// }
