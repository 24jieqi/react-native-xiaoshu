import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
  isValidElement,
} from 'react'
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
  InputAccessoryView,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  useColorScheme,
} from 'react-native'

import IconSvgCross from '../icon/cross'
import { useTheme } from '../theme'
import { formatNumber } from '../helpers/format/number'
import { isDef } from '../helpers/typeof'
import usePersistFn from '../hooks/usePersistFn'
import * as helpers from '../helpers'
import { createStyles } from './style'
import type { TextInputProps } from './interface'

const defaultFormatter = <T,>(t: T): T => t

let nextInputAccessoryViewID = 0

const getNextInputAccessoryViewID = () => ++nextInputAccessoryViewID

/**
 * 自定义输入项
 * @description 在和 react-native-keyboard-aware-scroll-view 配合做软键盘适配时，如果是 textarea 类型默认 scrollEnabled 禁用，避免软键盘遮挡输入内容
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
  showBorder = false,
  addonAfter,
  addonBefore,

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

  const colorScheme = useColorScheme()
  const themeVar = useTheme()
  const onChangeTextPersistFn = usePersistFn(onChangeText || helpers.noop)
  const onEndEditingPersistFn = usePersistFn(onEndEditing || helpers.noop)
  const onFocusPersistFn = usePersistFn(onFocus || helpers.noop)
  const onBlurPersistFn = usePersistFn(onBlur || helpers.noop)
  const formatterPersistFn = usePersistFn(formatter || defaultFormatter)
  const [localValue, setLocalValue] = useState(value)
  const [focus, setFocus] = useState(false)
  const TextInputRef = useRef<RNTextInput>(null)
  const inputAccessoryViewID = useMemo(
    () => `TextInputBase_${getNextInputAccessoryViewID()}`,
    [],
  )
  const Styles = createStyles(themeVar)
  const keyboardAppearance =
    resetProps.keyboardAppearance || colorScheme || 'light'

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
      onChangeTextPersistFn(t)
    },
    [type, maxLength, formatTrigger, formatter, onChangeTextPersistFn],
  )
  const onEndEditingTextInput = useCallback(
    (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
      if (formatTrigger === 'onChangeText') {
        e.nativeEvent.text = formatterPersistFn(e.nativeEvent.text)
      }

      setLocalValue(e.nativeEvent.text)
      onEndEditingPersistFn(e)
    },
    [onEndEditingPersistFn, formatterPersistFn, formatTrigger],
  )
  /**
   * 点击完成收起软键盘
   */
  const onPressFinish = useCallback(() => {
    Keyboard.dismiss()
    setFocus(false)
  }, [])
  /**
   * 点击清除按钮
   * @description 目前不能在输入框聚焦的时候触发点击，输入框失去焦点后才能触发点击，可能是软键盘的问题？
   */
  const onPressClearable = useCallback(() => {
    TextInputRef.current?.clear()
    setLocalValue('')
    onChangeTextPersistFn('')
    onPressTextInputWrapper()
  }, [onChangeTextPersistFn, onPressTextInputWrapper])
  const onFocusTextInput = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocus(true)
      onFocusPersistFn(e)
    },
    [onFocusPersistFn],
  )
  const onBlurTextInput = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocus(false)
      onBlurPersistFn(e)
    },
    [onBlurPersistFn],
  )

  // 同步外部的数据
  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const wrapperStyleSummary: ViewStyle = StyleSheet.flatten([
    multiline
      ? {
          minHeight:
            themeVar.text_input_min_height * +rows +
            themeVar.text_input_padding_vertical * 2,
        }
      : null,
    showBorder ? Styles.border : null,
    clearable ? Styles.wrapperClearable : null,
    wrapperStyle,
  ])
  const textInputStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.textInput,
    showBorder ? Styles.textInputBorder : null,
    clearable ? Styles.textInputClearable : null,
    style,
  ])
  const accessoryTextStyle: TextStyle = {
    color: themeVar[`text_input_${keyboardAppearance}_accessory_text_color`],
    fontSize: themeVar.text_input_accessory_font_size,
    fontWeight: 'bold',
    lineHeight: (themeVar.text_input_accessory_height / 3) * 2,
  }

  const addonAfterJSX = isDef(addonAfter) ? (
    isValidElement(addonAfter) ? (
      addonAfter
    ) : (
      <Text style={[Styles.addonText, Styles.addonAfterText]}>
        {addonAfter}
      </Text>
    )
  ) : null
  const addonBeforeJSX = isDef(addonBefore) ? (
    isValidElement(addonBefore) ? (
      addonBefore
    ) : (
      <Text style={[Styles.addonText, Styles.addonBeforeText]}>
        {addonBefore}
      </Text>
    )
  ) : null

  /**
   * 显示辅助工具栏
   * @description 单行输入框回车键已具备收起键盘的作用
   */
  const showInputAccessoryView = type !== 'text'

  const textInputJSX = (
    <>
      {showInputAccessoryView ? (
        <InputAccessoryView
          nativeID={inputAccessoryViewID}
          backgroundColor={
            themeVar[
              `text_input_${keyboardAppearance}_accessory_background_color`
            ]
          }>
          <View style={Styles.accessory}>
            <Text style={accessoryTextStyle} onPress={onPressFinish}>
              完成
            </Text>
          </View>
        </InputAccessoryView>
      ) : null}
      <TouchableWithoutFeedback onPress={onPressTextInputWrapper}>
        <View style={wrapperStyleSummary}>
          <RNTextInput
            {...resetProps}
            ref={TextInputRef}
            style={textInputStyleSummary}
            value={isDef(value) ? value : localValue}
            multiline={multiline}
            scrollEnabled={scrollEnabled}
            selectionColor={
              selectionColor || themeVar.text_input_selection_color
            }
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
            inputAccessoryViewID={
              resetProps.inputAccessoryViewID ||
              (showInputAccessoryView ? inputAccessoryViewID : undefined)
            }
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
    </>
  )

  if (addonAfterJSX || addonBeforeJSX) {
    return (
      <View style={Styles.addon}>
        {addonBeforeJSX}
        <View style={Styles.addonInput}>{textInputJSX}</View>
        {addonAfterJSX}
      </View>
    )
  }

  return textInputJSX
}

export default memo(TextInputBase)
