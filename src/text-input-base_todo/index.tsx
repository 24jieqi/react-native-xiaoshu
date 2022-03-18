export const todo = '暂时不实现'

// import React, {
//   useState,
//   useRef,
//   useCallback,
//   useImperativeHandle,
//   memo,
//   forwardRef,
// } from 'react'
// import type {
//   ViewStyle,
//   TextStyle,
//   StyleProp,
//   NativeSyntheticEvent,
//   TextInputFocusEventData,
//   TextInputEndEditingEventData,
// } from 'react-native'
// import { View, TextInput as RNTextInput, Platform } from 'react-native'

// import {
//   getDefaultValue,
//   renderTextLikeJSX,
//   noop,
//   isValue,
//   isDef,
// } from '../helpers'
// import { usePersistFn, useUpdateEffect } from '../hooks'
// import IconSvgCross from '../icon/cross'
// import { useTheme } from '../theme'

// import type { TextInputBaseProps } from './interface'
// import { createStyles } from './style'

// const defaultFormatter = (t: string) => t

// const TextInputBase2 = forwardRef<RNTextInput, TextInputBaseProps>(
//   (
//     {
//       fixGroupStyle,
//       prefixTextStyle,
//       suffixTextStyle,

//       clearable = false,
//       clearTrigger = 'focus',
//       formatter,
//       formatTrigger = 'onChangeText',
//       prefix,
//       suffix,
//       size = 'middle',
//       bordered = false,
//       textInputHeight,

//       // TextInput 的属性
//       value,
//       defaultValue,
//       style,
//       onChangeText,
//       onEndEditing,
//       onFocus,
//       onBlur,
//       ...resetProps
//     },
//     ref,
//   ) => {
//     const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
//     const onEndEditingPersistFn = usePersistFn(onEndEditing || noop)
//     const onFocusPersistFn = usePersistFn(onFocus || noop)
//     const onBlurPersistFn = usePersistFn(onBlur || noop)
//     const formatterPersistFn = usePersistFn(formatter || defaultFormatter)
//     const [localValue, setLocalValue] = useState(
//       isValue(value) ? value : defaultValue,
//     )
//     const [focus, setFocus] = useState(false)
//     const TextInputRef = useRef<RNTextInput>(null)
//     const THEME_VAR = useTheme()
//     const STYLES = createStyles(THEME_VAR)

//     // 转发实例
//     useImperativeHandle(ref, () => TextInputRef.current)

//     // 同步外部的数据
//     useUpdateEffect(() => {
//       setLocalValue(value)
//     }, [value])

//     /** 显示禁用样子 bordered 才显示 */
//     const showDisabledInput =
//       bordered && isDef(resetProps.editable) && !resetProps.editable

//     /** 输入框最小高度 */
//     const textInputMinHeight = THEME_VAR[`text_input_${size}_min_height`]
//     /** 所有文字/文案相关的大小 */
//     const textInputFontSize = THEME_VAR[`text_input_${size}_font_size`]

//     // 修正数据
//     resetProps.selectionColor = getDefaultValue(
//       resetProps.selectionColor,
//       THEME_VAR.text_input_selection_color,
//     )
//     resetProps.placeholderTextColor = getDefaultValue(
//       resetProps.placeholderTextColor,
//       THEME_VAR.text_input_placeholder_text_color,
//     )
//     resetProps.returnKeyType = getDefaultValue(resetProps.returnKeyType, 'done')

//     /**
//      * 点击清除按钮
//      * @description 目前不能在输入框聚焦的时候触发点击，输入框失去焦点后才能触发点击，可能是软键盘的问题？
//      */
//     const onPressClearable = useCallback(() => {
//       TextInputRef.current?.clear()
//       setLocalValue('')
//       onChangeTextPersistFn('')
//       TextInputRef.current?.focus()
//     }, [onChangeTextPersistFn])

//     /**
//      * 当文字变化
//      * @description 在这个阶段判断字符长度、格式化数据
//      */
//     const onChangeTextTextInput = useCallback(
//       (t: string) => {
//         if (
//           typeof resetProps.maxLength === 'number' &&
//           t.length > resetProps.maxLength
//         ) {
//           t = t.slice(0, resetProps.maxLength)
//         }

//         if (formatTrigger === 'onChangeText') {
//           t = formatterPersistFn(t)
//         }

//         setLocalValue(t || undefined)
//         onChangeTextPersistFn(t)
//       },
//       [
//         resetProps.maxLength,
//         formatTrigger,
//         formatterPersistFn,
//         onChangeTextPersistFn,
//       ],
//     )

//     /**
//      * 编辑结束的时候
//      */
//     const onEndEditingTextInput = useCallback(
//       (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
//         if (formatTrigger === 'onEndEditing') {
//           e.nativeEvent.text = formatterPersistFn(e.nativeEvent.text)
//         }

//         setLocalValue(e.nativeEvent.text)
//         onEndEditingPersistFn(e)
//       },
//       [onEndEditingPersistFn, formatterPersistFn, formatTrigger],
//     )

//     /**
//      * 输入框聚焦
//      */
//     const onFocusTextInput = useCallback(
//       (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
//         setFocus(true)
//         onFocusPersistFn(e)
//       },
//       [onFocusPersistFn],
//     )

//     /**
//      * 输入框失焦
//      */
//     const onBlurTextInput = useCallback(
//       (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
//         setFocus(false)
//         onBlurPersistFn(e)
//       },
//       [onBlurPersistFn],
//     )

//     /** 输入框不确定是否要排除边框 */
//     const inputUncertainHeight = bordered ? 2 : 0

//     const textInputTextStyle: TextStyle = {
//       fontSize: textInputFontSize,
//     }
//     const textFixGroupStyle: StyleProp<ViewStyle> = [
//       STYLES.fix_group,
//       bordered ? STYLES.fix_group_border : null,
//       fixGroupStyle,
//       showDisabledInput ? STYLES.fix_group_disabled : null,
//     ]
//     const textInputStyle: StyleProp<TextStyle> = [
//       STYLES.text_input,
//       {
//         height: textInputMinHeight - inputUncertainHeight,
//         paddingVertical: (textInputMinHeight - inputUncertainHeight - 22) / 2,
//       },
//       isDef(textInputHeight)
//         ? Platform.select({
//             android: {
//               height: textInputHeight - inputUncertainHeight,
//             },
//             ios: {
//               paddingVertical:
//                 (textInputHeight -
//                   (textInputMinHeight - inputUncertainHeight)) /
//                 2,
//             },
//           })
//         : null,
//       style,
//       // showDisabledInput ? STYLES.text_input_disabled : null,
//     ]

//     const prefixJSX = renderTextLikeJSX(prefix, [
//       STYLES.fix_text,
//       STYLES.fix_text_pre,
//       textInputTextStyle,
//       prefixTextStyle,
//     ])
//     const suffixJSX = renderTextLikeJSX(suffix, [
//       STYLES.fix_text,
//       STYLES.fix_text_suf,
//       textInputTextStyle,
//       suffixTextStyle,
//     ])

//     return (
//       <View style={textFixGroupStyle}>
//         {prefixJSX}
//         <RNTextInput
//           {...resetProps}
//           ref={TextInputRef}
//           style={textInputStyle}
//           value={isValue(value) ? value : localValue}
//           defaultValue={defaultValue}
//           onChangeText={onChangeTextTextInput}
//           onEndEditing={onEndEditingTextInput}
//           onFocus={onFocusTextInput}
//           onBlur={onBlurTextInput}
//         />
//         {clearable &&
//         (clearTrigger === 'focus' ? focus : true) &&
//         localValue &&
//         localValue.length ? (
//           <IconSvgCross
//             style={STYLES.clearable}
//             color={THEME_VAR.text_input_clearable_color}
//             size={(THEME_VAR.text_input_clearable_size / 4) * 3}
//             onPress={onPressClearable}
//           />
//         ) : null}
//         {suffixJSX}
//       </View>
//     )
//   },
// )

// export default memo(TextInputBase2)
