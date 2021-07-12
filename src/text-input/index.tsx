import React, { useState, useRef, useEffect, useCallback, memo } from 'react'
import type {
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputEndEditingEventData,
} from 'react-native'
import {
  View,
  TextInput as RNTextInput,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'

import IconSvgCross from '../icon/cross'
import { useTheme } from '../theme'
import { formatNumber } from '../helpers/format/number'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style'
import type { TextInputProps } from './interface'

/**
 * 自定义输入项
 * @description 在和 react-native-keyboard-aware-scroll-view 配合做软键盘适配时，如果是 textare 类型默认 scrollEnabled 禁用，避免软键盘遮挡输入内容
 */
const TextInputBase: React.FC<TextInputProps> = ({
  wrapperStyle,
  type = 'text',
  rows = 2,
  clearable = false,
  clearTrigger = 'focus',
  formatter,
  formatTrigger = 'onChangeText',
  showWordLimit = false,

  // TextInput 的属性
  value,
  style,
  multiline,
  selectionColor,
  secureTextEntry,
  placeholderTextColor,
  keyboardType,
  onChangeText,
  onEndEditing,
  onFocus,
  onBlur,
  maxLength,
  scrollEnabled = false,
  returnKeyType,
  ...resetProps
}) => {
  // 修正数据
  if (type === 'textarea') {
    multiline = true
    clearable = false
  } else {
    if (!returnKeyType) {
      returnKeyType = 'done'
    }
  }
  if (type === 'password') {
    secureTextEntry = true
  }
  if (type === 'number') {
    keyboardType = 'numeric'
  }
  if (type === 'digit') {
    keyboardType = 'number-pad'
  }
  if (showWordLimit && isDef(maxLength)) {
    showWordLimit = false
  }

  const themeVar = useTheme()
  const [localValue, setLocalValue] = useState(value)
  const [focus, setFocus] = useState(false)
  const TextInputRef = useRef<RNTextInput>(null)
  const Styles = createStyles(themeVar)

  /** 点击外边聚焦 */
  const onPressTextInputWrapper = useCallback(() => {
    TextInputRef.current?.focus()
  }, [])
  /**
   * 当文字变化
   * @description 在这个阶段判断字符长度、格式化数据
   */
  const onChangeTextTextInput = useCallback(
    (t: string) => {
      // 部分数据开始格式化
      // 允许输入正整数
      if (type === 'digit' || type === 'number') {
        const isNumber = type === 'number'
        t = formatNumber(t, isNumber, isNumber)
      }

      if (typeof maxLength === 'number' && t.length > maxLength) {
        t = t.slice(0, maxLength)

        // Toast.info({
        //   content: `最多可输入${maxLength}字`,
        //   mask: false,
        // })
      }

      if (formatTrigger === 'onChangeText' && formatter) {
        t = formatter(t)
      }

      setLocalValue(t)
      onChangeText && onChangeText(t)
    },
    [type, maxLength, formatTrigger, formatter, onChangeText],
  )
  const onEndEditingTextInput = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
      if (formatTrigger === 'onChangeText' && formatter) {
        e.nativeEvent.text = formatter(e.nativeEvent.text)
      }

      setLocalValue(e.nativeEvent.text)
      onEndEditing && onEndEditing(e)
    },
    [onEndEditing, formatter, formatTrigger],
  )
  /**
   * 点击清除按钮
   * @description 目前不能在输入框聚焦的时候触发点击，输入框失去焦点后才能触发点击，可能是软键盘的问题？
   */
  const onPressClearable = useCallback(() => {
    TextInputRef.current?.clear()
    setLocalValue('')
    onChangeText && onChangeText('')
    onPressTextInputWrapper()
  }, [onChangeText, onPressTextInputWrapper])
  const onFocusTextInput = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocus(true)
      onFocus && onFocus(e)
    },
    [onFocus],
  )
  const onBlurTextInput = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocus(false)
      onBlur && onBlur(e)
    },
    [onBlur],
  )

  // 同步外部的数据
  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const wrapperStyleSummary: ViewStyle = StyleSheet.flatten([
    multiline
      ? {
          minHeight: themeVar.text_input_min_height * +rows,
        }
      : null,
    clearable ? Styles.wrapperClearable : null,
    wrapperStyle,
  ])
  const textInputStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.textInput,
    multiline
      ? {
          ...Platform.select({
            android: {
              lineHeight: themeVar.text_input_min_height,
            },
            ios: {
              lineHeight: themeVar.text_input_min_height - 8,
              paddingVertical: 4,
            },
          }),
        }
      : { height: themeVar.text_input_min_height },
    clearable ? Styles.textInputClearable : null,
    style,
  ])

  return (
    <TouchableWithoutFeedback onPress={onPressTextInputWrapper}>
      <View style={wrapperStyleSummary}>
        <RNTextInput
          {...resetProps}
          ref={TextInputRef}
          style={textInputStyleSummary}
          value={isDef(value) ? value : localValue}
          multiline={multiline}
          scrollEnabled={scrollEnabled}
          selectionColor={selectionColor || themeVar.text_input_selection_color}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={
            placeholderTextColor || themeVar.text_input_placeholder_text_color
          }
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={onChangeTextTextInput}
          onEndEditing={onEndEditingTextInput}
          onFocus={onFocusTextInput}
          onBlur={onBlurTextInput}
        />

        {clearable &&
        (clearTrigger === 'focus' ? focus : true) &&
        localValue &&
        localValue.length ? (
          <TouchableOpacity
            style={Styles.clearableWrapper}
            onPress={onPressClearable}>
            <View style={Styles.clearable}>
              <IconSvgCross
                color={themeVar.text_input_clearable_color}
                size={themeVar.text_input_clearable_size / 2}
              />
            </View>
          </TouchableOpacity>
        ) : null}

        {showWordLimit ? (
          <Text style={Styles.wordLimit}>
            {localValue?.length}/{maxLength}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default memo(TextInputBase)
